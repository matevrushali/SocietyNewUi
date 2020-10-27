import { TestBed } from '@angular/core/testing';

import { BillingHeadService } from './billing-head.service';

describe('BillingHeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingHeadService = TestBed.get(BillingHeadService);
    expect(service).toBeTruthy();
  });
});
