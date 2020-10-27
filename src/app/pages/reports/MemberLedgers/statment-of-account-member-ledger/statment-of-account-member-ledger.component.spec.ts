import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatmentOfAccountMemberLedgerComponent } from './statment-of-account-member-ledger.component';

describe('StatmentOfAccountMemberLedgerComponent', () => {
  let component: StatmentOfAccountMemberLedgerComponent;
  let fixture: ComponentFixture<StatmentOfAccountMemberLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatmentOfAccountMemberLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatmentOfAccountMemberLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
