import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStaffDetailsComponent } from './get-staff-details.component';

describe('GetStaffDetailsComponent', () => {
  let component: GetStaffDetailsComponent;
  let fixture: ComponentFixture<GetStaffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStaffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStaffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
