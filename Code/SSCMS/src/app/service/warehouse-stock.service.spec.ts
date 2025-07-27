import { TestBed } from '@angular/core/testing';

import { WarehouseStockService } from './warehouse-stock.service';

describe('WarehouseStockService', () => {
  let service: WarehouseStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
