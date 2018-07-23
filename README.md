<!-- https://daringfireball.net/projects/markdown/syntax#link -->
# Live

You can preview this project at <a href="https://sergeymalykh.github.io/sudoku-tester/" target="_blank">sudoku-tester preview</a>.
<!-- <a href="https://sergeymalykh.github.io/sudoku-tester/" target="_blank">sudoku-tester preview</a>. -->
<!-- [sudoku-tester](https://sergeymalykh.github.io/sudoku-tester/). -->



# Task requirements / (interview exam)
Using only core C# or Java or JavaScript language (no open-source libraries) write a method that takes in a file as input and returns true or false whether the contents of the file is a valid solution to a Sudoku puzzle.
The solution should handle exception scenarios.
(You can create additional classes as necessary. Please keep all classes in same solution. Also include unit tests and test case files used.)

Sudoku wikipedia documentation [https://en.wikipedia.org/wiki/Sudoku](https://en.wikipedia.org/wiki/Sudoku).

Expected file format included [input_sudoku.txt](https://raw.githubusercontent.com/SergeyMalykh/sudoku-tester/master/input_sudoku.txt).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

The expected test result:

AppComponent<br/>
should create the app<br/>
should have as title 'sudoku tester app'<br/>

SudokuLoadComponent<br/>
SudokuLoadComponent should be created<br/>

SudokuComponent<br/>
0: SudokuComponent should be created<br/>
1: should be NO exceptions on test case selection 'testSet_ValidSet'<br/>
2: should be supported exception on test case selection 'testSet_Null'<br/>
3: should be supported exception on test case selection 'testSet_WrongRowsNumber'<br/>
4: should be supported exception on test case selection 'testSet_WrongColumnsNumber'<br/>
5: should be supported exception on test case selection 'testSet_RowContanitsNotDigitSymbol'<br/>
6: should be supported exception on test case selection 'testSet_RowContanitsNotSupportedDigit'<br/>
7: should be supported exception on test case selection 'testSet_NotValidSet'<br/>


<!-- 
cd D:\Projects\Scotia_Test
ng new sudoku
cd sudoku
ng serve --open

ng generate component sudoku
ng generate component sudoku-load

app.module.ts :
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
imports: [BrowserModule, AppRouting, FormsModule, ReactiveFormsModule],

npm install bootstrap
package.json:
"bootstrap": "^4.1.2", -> "bootstrap": "^3.3.7",

.angular-cli.json
 "styles": [
       "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.styl"
      ],


npm install
npm start


create folder in root: "docs"

// https://alligator.io/angular/deploying-angular-app-github-pages/
npm install -g angular-cli-ghpages

ng build --prod --base-href "https://sergeymalykh.github.io/sudoku-tester/"

// ERROR in ./src/main.ts
// Module not found: Error can't resolve './$$_gendir/app/app.module.ngfactory'

ng --version

@angular/cli: 1.1.0
node: 10.1.0
os: win32 x64
@angular/common: 4.4.7
@angular/core: 4.4.7
@angular/forms: 4.4.7


npm install -g @angular/cli

// npm downgrade:
npm cache clean -f
npm i -g npm@5.3.0
not working: npm i -g npm@8.11.3
npm i -g npm@5.3.0

node -v
v10.1.0
v8.11.3


"scripts": {
    "ng": "ng",
    "build": "ng build --env=prod --base-href \"https://sergeymalykh.github.io/sudoku-tester/\"",


npm run build

copy dist -> docs

git add docs -f



 -->
