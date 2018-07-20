import { ITxt } from './sudoku.interface';

export class TestNames {
  static  Null = 'Null';
  static  WrongRowsNumber = 'Wrong number of rows';
  static  WrongColumnsNumber = 'Wrong number of columns';
  static  RowContanitsNotDigitSymbol = 'A row contanits not a digit symbol';
  static  RowContanitsNotSupportedDigit = 'A row contanits not supported digit';
  static  NotValidSet = 'Not Valid Set';
  static  ValidSet = 'Valid Set';
}

export const testMockSets: Array<ITxt> = [
  {
    name: TestNames.Null,
    txtRows: []
  },
  {
    name: TestNames.ValidSet,
    txtRows: [
      '534678912',
      '672195348',
      '198342567',
      '859761423',
      '426853791',
      '713924856',
      '961537284',
      '287419635',
      '345286179'
    ]
  },

  {
    name: TestNames.NotValidSet,
    txtRows: [
      '534678913',
      '672195348',
      '198342567',
      '859761423',
      '426853791',
      '713924856',
      '961537284',
      '287419635',
      '345286179'
    ]
  },
  {
    name: TestNames.RowContanitsNotSupportedDigit,
    txtRows: [
      '504678912',
      '670195348',
      '198042567',
      '859761423',
      '426853791',
      '713924856',
      '961537284',
      '287419635',
      '345286179'
    ]
  },

  {
    name: TestNames.WrongRowsNumber,
    txtRows: ['534678913', '672195348']
  },
  {
    name: TestNames.WrongColumnsNumber,
    txtRows: [
      '5346789122',
      '672195348',
      '1983425672',
      '85976123',
      '426853791',
      '713924856',
      '961537284',
      '287419635',
      '345286179'
    ]
  },
  {
    name: TestNames.RowContanitsNotDigitSymbol,
    txtRows: [
      '534678912',
      '672195348',
      '198342567',
      '85976123+',
      '426853791',
      '713924856',
      '961537284',
      '287419635',
      '345286179'
    ]
  }
];
