import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseProductDialog } from './warehouse.product.dialog';

describe('WarehouseProductDialog', () => {
  let component: WarehouseProductDialog;
  let fixture: ComponentFixture<WarehouseProductDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseProductDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseProductDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
