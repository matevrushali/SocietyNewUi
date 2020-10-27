import { TestBed } from '@angular/core/testing';

import { ResidentVehicleService } from './resident-vehicle.service';

describe('ResidentVehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentVehicleService = TestBed.get(ResidentVehicleService);
    expect(service).toBeTruthy();
  });
});
