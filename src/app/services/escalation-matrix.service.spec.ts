import { TestBed } from '@angular/core/testing';

import { EscalationMatrixService } from './escalation-matrix.service';

describe('EscalationMatrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscalationMatrixService = TestBed.get(EscalationMatrixService);
    expect(service).toBeTruthy();
  });
});
