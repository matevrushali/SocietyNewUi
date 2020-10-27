import { TestBed } from '@angular/core/testing';

import { ChannelPartnerService } from './channel-partner.service';

describe('ChannelPartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChannelPartnerService = TestBed.get(ChannelPartnerService);
    expect(service).toBeTruthy();
  });
});
