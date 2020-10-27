import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherEntryListComponent } from './voucher-entry-list.component';

describe('VoucherEntryListComponent', () => {
  let component: VoucherEntryListComponent;
  let fixture: ComponentFixture<VoucherEntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherEntryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
