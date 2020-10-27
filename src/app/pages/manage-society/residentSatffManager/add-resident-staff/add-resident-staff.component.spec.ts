import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidentStaffComponent } from './add-resident-staff.component';

describe('AddResidentStaffComponent', () => {
  let component: AddResidentStaffComponent;
  let fixture: ComponentFixture<AddResidentStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResidentStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResidentStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
