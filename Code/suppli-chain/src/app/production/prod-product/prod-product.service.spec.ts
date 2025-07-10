import { TestBed } from '@angular/core/testing';

import { ProdProductService } from './prod-product.service';

describe('ProdProductService', () => {
  let service: ProdProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
