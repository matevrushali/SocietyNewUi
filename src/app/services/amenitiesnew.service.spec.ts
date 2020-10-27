import { TestBed } from '@angular/core/testing';

import { AmenitiesnewService } from './amenitiesnew.service';

describe('AmenitiesnewService', () => {
  let service: AmenitiesnewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenitiesnewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
