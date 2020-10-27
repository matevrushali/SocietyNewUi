import { TestBed } from '@angular/core/testing';

import { VendorsBillService } from './vendors-bill.service';

describe('VendorsBillService', () => {
  let service: VendorsBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
