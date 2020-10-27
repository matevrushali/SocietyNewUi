import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsExecutiveComponent } from './accounts-executive.component';

describe('AccountsExecutiveComponent', () => {
  let component: AccountsExecutiveComponent;
  let fixture: ComponentFixture<AccountsExecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsExecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
