import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeStatusUpdateListComponent } from './cheque-status-update-list.component';

describe('ChequeStatusUpdateListComponent', () => {
  let component: ChequeStatusUpdateListComponent;
  let fixture: ComponentFixture<ChequeStatusUpdateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeStatusUpdateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeStatusUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
