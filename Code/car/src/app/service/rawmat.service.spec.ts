import { TestBed } from '@angular/core/testing';

import { RawmatService } from './rawmat.service';

describe('RawmatService', () => {
  let service: RawmatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawmatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
