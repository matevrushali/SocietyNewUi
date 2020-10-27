import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResidentVehicleDetailsComponent } from './get-resident-vehicle-details.component';

describe('GetResidentVehicleDetailsComponent', () => {
  let component: GetResidentVehicleDetailsComponent;
  let fixture: ComponentFixture<GetResidentVehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetResidentVehicleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResidentVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
