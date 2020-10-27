import { TestBed } from '@angular/core/testing';

import { OccupancyService } from './occupancy.service';

describe('OccupancyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccupancyService = TestBed.get(OccupancyService);
    expect(service).toBeTruthy();
  });
});
