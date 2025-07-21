import { TestBed } from '@angular/core/testing';

import { CompanygrowthService } from './companygrowth.service';

describe('CompanygrowthService', () => {
  let service: CompanygrowthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanygrowthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
