import { TestBed } from '@angular/core/testing';

import { AlbumUploadService } from './album-upload.service';

describe('AlbumUploadService', () => {
  let service: AlbumUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
