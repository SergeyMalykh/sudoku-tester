import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { ITxt } from '../sudoku.interface';
import { testMockSets } from '../sudoku.mock';

@Component({
  selector: 'app-sudoku-load',
  templateUrl: './sudoku-load.component.html',
  styleUrls: ['./sudoku-load.component.css']
})
export class SudokuLoadComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  @Output() outputEvent = new EventEmitter<ITxt>();
  testSets: Array<ITxt> = [];
  selectedTestSet?: ITxt = null;
  constructor() {
    this.testSets = testMockSets;
  }

  onFileChange(event) {
    this.selectedTestSet = null;
    const that = this;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsText(file);
      reader.onload = () => {
        const txt = reader.result;
        // debugger;
        that.extractData(txt, 'Uploaded file');
      };
    }
  }

  // export interface ICSV {
  //   csvRows: Array<Array<string>>;
  // }
  // extractData(csvFile) {
  //   const csvData = csvFile;
  //   const allTextLines = csvData.split(/\r\n|\n/);
  //   const headers = allTextLines[0].split(',');
  //   // tslint:disable-next-line:prefer-const
  //   let csv: ICSV = {csvRows: []};
  //   for (let i = 0; i < allTextLines.length; i++) {
  //     // split content based on comma
  //     const data = allTextLines[i].split(',');
  //     if (data.length === headers.length) {
  //       // tslint:disable-next-line:prefer-const
  //       let csvRow = [] as Array<string>;
  //       for (let j = 0; j < headers.length; j++) {
  //         // const ss: string = data[j];
  //         // const sss = ss.match(/.{1,1}/g);
  //         csvRow.push(data[j]);
  //       }
  //       csv.csvRows.push(csvRow);
  //     }
  //   }

  extractData(txtFile: string, fileName: string) {
    const allTextLines = txtFile.split(/\r\n|\n/);
    // tslint:disable-next-line:prefer-const
    let txt: ITxt = { name: fileName, txtRows: [] };
    for (let i = 0; i < allTextLines.length; i++) {
      txt.txtRows.push(allTextLines[i]);
    }
    // debugger;
    this.outputEvent.emit(txt);
  }

  clearFile() {
    this.selectedTestSet = null;
    this.fileInput.nativeElement.value = '';
    this.outputEvent.emit(null);
  }

  public onChangeTestSet(testSetName: string): void {
    const testSet = testMockSets.find(t => t.name === testSetName);
    this.fileInput.nativeElement.value = '';
    this.outputEvent.emit(testSet);
  }

  public onChangeSelectedTestSet(event?: ITxt): void {
    this.selectedTestSet = event;
    this.fileInput.nativeElement.value = '';
    this.outputEvent.emit(this.selectedTestSet);
  }

}
