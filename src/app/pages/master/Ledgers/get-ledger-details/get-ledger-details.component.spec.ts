import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLedgerDetailsComponent } from './get-ledger-details.component';

describe('GetLedgerDetailsComponent', () => {
  let component: GetLedgerDetailsComponent;
  let fixture: ComponentFixture<GetLedgerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLedgerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLedgerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
