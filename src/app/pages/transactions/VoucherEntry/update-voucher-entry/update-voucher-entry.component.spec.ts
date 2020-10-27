import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoucherEntryComponent } from './update-voucher-entry.component';

describe('UpdateVoucherEntryComponent', () => {
  let component: UpdateVoucherEntryComponent;
  let fixture: ComponentFixture<UpdateVoucherEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVoucherEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVoucherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
