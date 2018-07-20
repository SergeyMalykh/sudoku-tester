import { Component, OnInit } from '@angular/core';
import { ITxt, ICell } from '../sudoku.interface';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  txtBox: ITxt;
  testResults: Array<string> = [];
  sudokuBox: ICell[][] = [];
  constructor() {}

  ngOnInit() {}

  onOutputEvent(txt?: ITxt) {
    this.txtBox = null;
    this.testResults = [];
    this.sudokuBox = [];
    if (txt) {
      this.txtBox = txt;
      this.toValidateTextBox(txt);
      this.sudokuBox = this.mapTxtBoxToSudokuBox(txt);
      this.toValidateSudokuBox(this.sudokuBox);
    }
  }

  toValidateTextBox(txt: ITxt): boolean {
    const prefix = 'the tested file ';
    if (txt.txtRows.length !== 9) {
      this.testResults.push(
        `${prefix} must includes 9 rows. The actual length is ${
          txt.txtRows.length
        }`
      );
    }
    if (this.testResults.length === 0) {
      txt.txtRows.forEach((row, intex) => {
        const rowlength: number = row.trim().length;
        if (rowlength !== 9) {
          this.testResults.push(
            `${prefix} line # ${intex +
              1} must includes 9 bytes. The actual size is ${rowlength}`
          );
        }
      });
    }
    if (this.testResults.length === 0) {
      txt.txtRows.forEach((row, intex) => {
        const notDigitBytes: string = row.trim().replace(/[0-9]/g, '');
        // const isnum = /^\d+$/.test(row);
        if (notDigitBytes.length > 0) {
          this.testResults.push(
            `${prefix} line # ${intex +
              1} must includes ONLY digits. The actual line includes: ${notDigitBytes}`
          );
        }
      });
    }
    return this.testResults.length === 0;
  }

  toValidateSudokuBox(sudokuBox: ICell[][]): boolean {
    if (this.testResults.length > 0) {
      return false;
    }

    const mustExistNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const getArrayColumn = (arr, n) => arr.map(x => x[n]);
    const sudokuBoxSize = 9;
    if (this.testResults.length === 0 && this.sudokuBox.length === 9) {
      this.sudokuBox.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (
            !mustExistNumbers.includes(
              this.sudokuBox[rowIndex][cellIndex].value
            )
          ) {
            const cellValue = this.sudokuBox[rowIndex][cellIndex].value;
            this.sudokuBox[rowIndex][cellIndex].isValid = false;
            this.testResults.push(
              `the cell in row (${rowIndex + 1}) column (${cellIndex +
                1}) with value ${cellValue} must be in array [1, 2, 3, 4, 5, 6, 7, 8, 9]`
            );
          }
        });
      });
    }

    if (this.testResults.length === 0 && this.sudokuBox.length === 9) {
      mustExistNumbers.forEach((mustExistNumber, index) => {
        this.sudokuBox.forEach((row, rowIndex) => {
          const fiteredCells: Array<ICell> = row.filter((cell, cellIndex) => {
            return cell.value === mustExistNumber;
          });
          if (fiteredCells.length > 1) {
            fiteredCells.forEach(wrongCell => {
              wrongCell.isValid = false;
            });
            this.testResults.push(
              `multiple cells in the row (${rowIndex +
                1}) have the same value ${mustExistNumber}`
            );
          }
        });

        for (let columnIndex = 0; columnIndex < sudokuBoxSize; columnIndex++) {
          // debugger;
          const columnArray = getArrayColumn(this.sudokuBox, columnIndex);

          const fiteredCells: Array<ICell> = columnArray.filter(
            (cell, cellIndex) => {
              return cell.value === mustExistNumber;
            }
          );
          if (fiteredCells.length > 1) {
            fiteredCells.forEach(wrongCell => {
              wrongCell.isValid = false;
            });
            this.testResults.push(
              `multiple cells in the column (${columnIndex +
                1}) have the same value ${mustExistNumber}`
            );
          }
        }
      });
    }

    return this.testResults.length === 0;
  }

  mapTxtBoxToSudokuBox(txt: ITxt): ICell[][] {
    if (this.testResults.length > 0) {
      return [];
    }
    const box: ICell[][] = [];
    txt.txtRows.forEach((row, rowIndex) => {
      row = row.trim();
      box[rowIndex] = [];
      // debugger;
      for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
        const cellValue: number = +row.charAt(cellIndex);
        box[rowIndex][cellIndex] = { value: cellValue, isValid: true };
      }
    });
    return box;
  }
}
