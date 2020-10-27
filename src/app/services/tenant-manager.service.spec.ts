import { TestBed } from '@angular/core/testing';

import { TenantManagerService } from './tenant-manager.service';

describe('TenantManagerService', () => {
  let service: TenantManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
