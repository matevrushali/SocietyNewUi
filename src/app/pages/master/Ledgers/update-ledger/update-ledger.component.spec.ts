import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLedgerComponent } from './update-ledger.component';

describe('UpdateLedgerComponent', () => {
  let component: UpdateLedgerComponent;
  let fixture: ComponentFixture<UpdateLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
