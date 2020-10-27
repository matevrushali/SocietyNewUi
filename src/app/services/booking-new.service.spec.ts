import { TestBed } from '@angular/core/testing';

import { BookingNewService } from './booking-new.service';

describe('BookingNewService', () => {
  let service: BookingNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
