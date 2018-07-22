import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuLoadComponent } from './sudoku-load.component';

describe('SudokuLoadComponent', () => {
  let component: SudokuLoadComponent;
  let fixture: ComponentFixture<SudokuLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuLoadComponent ],
      imports: [
        FormsModule, ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SudokuLoadComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
