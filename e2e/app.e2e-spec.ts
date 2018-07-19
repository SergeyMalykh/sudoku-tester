import { SudokuPage } from './app.po';

describe('sudoku App', () => {
  let page: SudokuPage;

  beforeEach(() => {
    page = new SudokuPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
