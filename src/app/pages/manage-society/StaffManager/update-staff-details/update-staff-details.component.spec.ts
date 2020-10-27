import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStaffDetailsComponent } from './update-staff-details.component';

describe('UpdateStaffDetailsComponent', () => {
  let component: UpdateStaffDetailsComponent;
  let fixture: ComponentFixture<UpdateStaffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStaffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStaffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
