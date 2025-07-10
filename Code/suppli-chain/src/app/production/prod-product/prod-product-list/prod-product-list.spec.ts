import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdProductList } from './prod-product-list';

describe('ProdProductList', () => {
  let component: ProdProductList;
  let fixture: ComponentFixture<ProdProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
