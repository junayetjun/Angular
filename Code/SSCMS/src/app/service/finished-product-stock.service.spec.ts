import { TestBed } from '@angular/core/testing';

import { FinishedProductStockService } from './finished-product-stock.service';

describe('FinishedProductStockService', () => {
  let service: FinishedProductStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinishedProductStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
