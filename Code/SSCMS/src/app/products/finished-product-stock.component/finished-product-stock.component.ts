import { Component, OnInit } from '@angular/core';
import { FinishedProductStock } from '../../model/finished-product-stock.model';
import { FinishedProductStockService } from '../../service/finished-product-stock.service';
import { ProductService } from '../../service/product.service';
import { WarehouseService } from '../../service/warehouse.service';
import { Product } from '../../model/product';
import { Warehouse } from '../../model/warehouse';
import { ProductionOrder } from '../../model/production-order.model';
import { ProductionOrderService } from '../../service/production-order.service';

@Component({
  selector: 'app-finished-product-stock.component',
  standalone: false,
  templateUrl: './finished-product-stock.component.html',
  styleUrl: './finished-product-stock.component.css'
})
export class FinishedProductStockComponent implements OnInit {

  finishedStocks: FinishedProductStock[] = [];
  products: Product[] = [];
  warehouses: Warehouse[] = [];
  productionOrders: ProductionOrder[] = [];

  constructor(
    private finishedProductStockService: FinishedProductStockService,
    private productService: ProductService,
    private warehouseService: WarehouseService,
    private productionOrderService: ProductionOrderService
  ) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  loadAllData(): void {
    this.finishedProductStockService.getAll().subscribe(data => this.finishedStocks = data);
    this.productService.getAll().subscribe(data => this.products = data);
    this.warehouseService.getAll().subscribe(data => this.warehouses = data);
    this.productionOrderService.getAll().subscribe(data => this.productionOrders = data);
  }

  getProductName(id: string): string {
    return this.products.find(p => p.id === id)?.name || 'Unknown';
  }

  getWarehouseName(id: string): string {
    return this.warehouses.find(w => w.id === id)?.name || id;
  }

  getSourceWarehouses(productId: string): string[] {
    const sources = new Set<string>();

    this.productionOrders
      .filter(o => o.productId === productId && o.status === 'Completed')
      .forEach(o => {
        o.warehouseAllocations?.forEach(alloc => sources.add(this.getWarehouseName(alloc.warehouseId)));
      });

    return Array.from(sources);
  }


}
