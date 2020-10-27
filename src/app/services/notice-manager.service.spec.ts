import { TestBed } from '@angular/core/testing';

import { NoticeManagerService } from './notice-manager.service';

describe('NoticeManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticeManagerService = TestBed.get(NoticeManagerService);
    expect(service).toBeTruthy();
  });
});
