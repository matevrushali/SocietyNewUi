import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidentVehicleComponent } from './add-resident-vehicle.component';

describe('AddResidentVehicleComponent', () => {
  let component: AddResidentVehicleComponent;
  let fixture: ComponentFixture<AddResidentVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResidentVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResidentVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
