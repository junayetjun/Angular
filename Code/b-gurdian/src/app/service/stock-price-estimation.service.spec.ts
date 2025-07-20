import { TestBed } from '@angular/core/testing';

import { StockPriceEstimationService } from './stock-price-estimation.service';

describe('StockPriceEstimationService', () => {
  let service: StockPriceEstimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPriceEstimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
