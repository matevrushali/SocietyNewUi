import { TestBed } from '@angular/core/testing';

import { VoucherEntryService } from './voucher-entry.service';

describe('VoucherEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoucherEntryService = TestBed.get(VoucherEntryService);
    expect(service).toBeTruthy();
  });
});
