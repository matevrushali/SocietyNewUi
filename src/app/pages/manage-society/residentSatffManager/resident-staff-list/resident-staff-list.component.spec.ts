import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentStaffListComponent } from './resident-staff-list.component';

describe('ResidentStaffListComponent', () => {
  let component: ResidentStaffListComponent;
  let fixture: ComponentFixture<ResidentStaffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentStaffListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentStaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
