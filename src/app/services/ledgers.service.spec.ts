import { TestBed } from '@angular/core/testing';

import { LedgersService } from './ledgers.service';

describe('LedgersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LedgersService = TestBed.get(LedgersService);
    expect(service).toBeTruthy();
  });
});
