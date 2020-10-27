import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVoucherEntryDetailsComponent } from './get-voucher-entry-details.component';

describe('GetVoucherEntryDetailsComponent', () => {
  let component: GetVoucherEntryDetailsComponent;
  let fixture: ComponentFixture<GetVoucherEntryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVoucherEntryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVoucherEntryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
