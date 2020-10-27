import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentVehicleListComponent } from './resident-vehicle-list.component';

describe('ResidentVehicleListComponent', () => {
  let component: ResidentVehicleListComponent;
  let fixture: ComponentFixture<ResidentVehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentVehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
