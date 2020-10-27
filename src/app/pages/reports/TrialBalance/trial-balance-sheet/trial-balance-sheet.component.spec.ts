import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialBalanceSheetComponent } from './trial-balance-sheet.component';

describe('TrialBalanceSheetComponent', () => {
  let component: TrialBalanceSheetComponent;
  let fixture: ComponentFixture<TrialBalanceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialBalanceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
