import { TestBed } from '@angular/core/testing';

import { VendorAddressService } from './vendor-address.service';

describe('VendorAddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorAddressService = TestBed.get(VendorAddressService);
    expect(service).toBeTruthy();
  });
});
