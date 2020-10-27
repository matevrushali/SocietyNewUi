import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResidentVehicleComponent } from './update-resident-vehicle.component';

describe('UpdateResidentVehicleComponent', () => {
  let component: UpdateResidentVehicleComponent;
  let fixture: ComponentFixture<UpdateResidentVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResidentVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResidentVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
