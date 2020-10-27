import { TestBed } from '@angular/core/testing';

import { BoardCommitteeService } from './board-committee.service';

describe('BoardCommitteeService', () => {
  let service: BoardCommitteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardCommitteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
