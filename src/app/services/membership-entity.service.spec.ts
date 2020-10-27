import { TestBed } from '@angular/core/testing';

import { MembershipEntityService } from './membership-entity.service';

describe('MembershipEntityService', () => {
  let service: MembershipEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
