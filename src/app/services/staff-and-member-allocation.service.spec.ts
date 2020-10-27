import { TestBed } from '@angular/core/testing';

import { StaffAndMemberAllocationService } from './staff-and-member-allocation.service';

describe('StaffAndMemberAllocationService', () => {
  let service: StaffAndMemberAllocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffAndMemberAllocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
