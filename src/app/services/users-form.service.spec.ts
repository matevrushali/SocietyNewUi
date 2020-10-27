import { TestBed } from '@angular/core/testing';

import { UsersFormService } from './users-form.service';

describe('UsersFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersFormService = TestBed.get(UsersFormService);
    expect(service).toBeTruthy();
  });
});
