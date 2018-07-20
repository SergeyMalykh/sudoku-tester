import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuComponent } from './sudoku.component';
import { ITxt } from '../sudoku.interface';
import { testMockSets, TestNames } from '../sudoku.mock';
import { SudokuLoadComponent } from '../sudoku-load/sudoku-load.component';

describe('SudokuComponent', () => {
  let component: SudokuComponent;
  let fixture: ComponentFixture<SudokuComponent>;
  const testSets: Array<ITxt> = testMockSets;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SudokuComponent, SudokuLoadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be supported exception on testSet_Null', () => {
    const testSet_Null: ITxt = testSets.find(
      testSet => testSet.name === TestNames.Null
    );
    // console.log(testSet_Null);
    component.onOutputEvent(testSet_Null);
    // console.log(component.testResults);

    expect(component.testResults.length).toBe(1);
    expect(component.testResults[0]).toMatch(
      'the tested file  must includes 9 rows. The actual length is 0'
    );
  });

  it('should be supported exception on testSet_WrongRowsNumber', () => {
    const testSet_WrongRowsNumber: ITxt = testSets.find(
      testSet => testSet.name === TestNames.WrongRowsNumber
    );
    // console.log(testSet_WrongRowsNumber);
    component.onOutputEvent(testSet_WrongRowsNumber);
    // console.log(component.testResults);

    expect(component.testResults.length).toBe(1);
    expect(component.testResults[0]).toMatch(
      'the tested file  must includes 9 rows. The actual length is 2'
    );
  });

  it('should be supported exception on testSet_WrongColumnsNumber', () => {
    const testSet_WrongColumnsNumber: ITxt = testSets.find(
      testSet => testSet.name === TestNames.WrongColumnsNumber
    );
    // console.log(testSet_WrongColumnsNumber);
    component.onOutputEvent(testSet_WrongColumnsNumber);
    // console.log(component.testResults);

    expect(component.testResults.length).toBe(3);
    expect(component.testResults[0]).toMatch(
      'the tested file  line # 1 must includes 9 bytes. The actual size is 10'
    );
    expect(component.testResults[1]).toMatch(
      'the tested file  line # 3 must includes 9 bytes. The actual size is 10'
    );
    expect(component.testResults[2]).toMatch(
      'the tested file  line # 4 must includes 9 bytes. The actual size is 8'
    );
  });

  it('should be supported exception on testSet_RowContanitsNotDigitSymbol', () => {
    const testSet_RowContanitsNotDigitSymbol: ITxt = testSets.find(
      testSet => testSet.name === TestNames.RowContanitsNotDigitSymbol
    );
    // console.log(testSet_RowContanitsNotDigitSymbol);
    component.onOutputEvent(testSet_RowContanitsNotDigitSymbol);
    // console.log(component.testResults);

    expect(component.testResults.length).toBe(1);
    expect(component.testResults[0]).toEqual(
      'the tested file  line # 4 must includes ONLY digits. The actual line includes: +'
    );
  });

  it('should be supported exception on testSet_RowContanitsNotSupportedDigit', () => {
    const testSet_RowContanitsNotSupportedDigit: ITxt = testSets.find(
      testSet => testSet.name === TestNames.RowContanitsNotSupportedDigit
    );
    component.onOutputEvent(testSet_RowContanitsNotSupportedDigit);
    // console.log(component.testResults);

    expect(component.testResults.length).toBe(3);
    // console.log(component.testResults[0]);
    expect(component.testResults[0]).toEqual(
      'the cell in row (1) column (2) with value 0 must be in array [1, 2, 3, 4, 5, 6, 7, 8, 9]'
    );
    expect(component.testResults[1]).toEqual(
      'the cell in row (2) column (3) with value 0 must be in array [1, 2, 3, 4, 5, 6, 7, 8, 9]'
    );
    expect(component.testResults[2]).toEqual(
      'the cell in row (3) column (4) with value 0 must be in array [1, 2, 3, 4, 5, 6, 7, 8, 9]'
    );
  });

  it('should be supported exception on testSet_NotValidSet', () => {
    const testSet_NotValidSet: ITxt = testSets.find(
      testSet => testSet.name === TestNames.NotValidSet
    );
    component.onOutputEvent(testSet_NotValidSet);
    // console.log(component.testResults);

    expect(component.testResults.length).toBe(2);
    // console.log(component.testResults[0]);
    expect(component.testResults[0]).toEqual(
      'multiple cells in the row (1) have the same value 3'
    );
    expect(component.testResults[1]).toEqual(
      'multiple cells in the column (9) have the same value 3'
    );
  });

  it('should be supported exception on testSet_ValidSet', () => {
    const testSet_ValidSet: ITxt = testSets.find(
      testSet => testSet.name === TestNames.ValidSet
    );
    component.onOutputEvent(testSet_ValidSet);
    expect(component.testResults.length).toBe(0);
  });

});
