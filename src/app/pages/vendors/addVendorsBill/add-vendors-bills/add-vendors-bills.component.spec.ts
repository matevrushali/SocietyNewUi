import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorsBillsComponent } from './add-vendors-bills.component';

describe('AddVendorsBillsComponent', () => {
  let component: AddVendorsBillsComponent;
  let fixture: ComponentFixture<AddVendorsBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVendorsBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorsBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
