import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffDetailsComponent } from './add-staff-details.component';

describe('AddStaffDetailsComponent', () => {
  let component: AddStaffDetailsComponent;
  let fixture: ComponentFixture<AddStaffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
