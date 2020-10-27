import { TestBed } from '@angular/core/testing';

import { ResidentStaffManagerService } from './resident-staff-manager.service';

describe('ResidentStaffManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentStaffManagerService = TestBed.get(ResidentStaffManagerService);
    expect(service).toBeTruthy();
  });
});
