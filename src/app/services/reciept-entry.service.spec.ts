import { TestBed } from '@angular/core/testing';

import { RecieptEntryService } from './reciept-entry.service';

describe('RecieptEntryService', () => {
  let service: RecieptEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecieptEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
