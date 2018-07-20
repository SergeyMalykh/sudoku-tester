export interface ITxt {
  name: string;
  txtRows: Array<string>;
}

export interface ISudokuBox {
  sudokuBox: ICell[][];
}

export interface ICell {
  value: number;
  isValid: boolean;
}
