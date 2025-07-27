import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductComponent } from '../../model/product';
import { ProductionOrder, WarehouseAllocation } from '../../model/production-order.model';
import { ProductService } from '../../service/product.service';
import { ProductionOrderService } from '../../service/production-order.service';
import { WarehouseStockService } from '../../service/warehouse-stock.service';
import { WarehouseStock } from '../../model/warehouse-stock.model';
import { RawMaterial } from '../../model/raw-material';
import { Warehouse } from '../../model/warehouse';
import { RawMaterialService } from '../../service/raw-material.service';
import { WarehouseService } from '../../service/warehouse.service';
import { FinishedProductStockService } from '../../service/finished-product-stock.service';

@Component({
  selector: 'app-production-order.component',
  standalone: false,
  templateUrl: './production-order.component.html',
  styleUrl: './production-order.component.css'
})
export class ProductionOrderComponent implements OnInit {
  orderForm!: FormGroup;
  products: Product[] = [];
  orders: ProductionOrder[] = [];
  warehouseStocks: WarehouseStock[] = [];
  materials: RawMaterial[] = [];
  warehouses: Warehouse[] = [];
  selectedOrder: ProductionOrder | null = null;
  finishedProductWarehouseId = 'finished-products-warehouse'; // Replace with your actual ID

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private orderService: ProductionOrderService,
    private stockService: WarehouseStockService,
    private materialService: RawMaterialService,
    private warehouseService: WarehouseService,
    private finishedProductStockService: FinishedProductStockService
  ) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    this.loadData();
  }

  loadData(): void {
    this.productService.getAll().subscribe(data => this.products = data);
    this.orderService.getAll().subscribe(data => this.orders = data);
    this.stockService.getAll().subscribe(data => this.warehouseStocks = data);
    this.materialService.getAll().subscribe(data => this.materials = data);
    this.warehouseService.getAll().subscribe(data => this.warehouses = data);
  }

  submitOrder(): void {
    if (this.orderForm.invalid) return;

    const productId = this.orderForm.value.productId;
    const quantity = +this.orderForm.value.quantity;
    const product = this.products.find(p => p.id === productId);

    if (!product) {
      alert('Product not found');
      return;
    }

    const allocations = this.allocateMaterials(product.components, quantity);
    if (!allocations) {
      alert('Insufficient stock to fulfill the order!');
      return;
    }

    const orderData: ProductionOrder = {
      productId,
      quantity,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      warehouseAllocations: allocations
    };

    if (this.selectedOrder) {
      const updatedOrder = { ...this.selectedOrder, ...orderData };
      this.orderService.update(updatedOrder).subscribe(() => {
        this.resetForm();
        this.loadData();
      });
    } else {
      this.orderService.create(orderData).subscribe(() => {
        this.resetForm();
        this.loadData();
      });
    }
  }

  allocateMaterials(components: ProductComponent[], quantity: number): WarehouseAllocation[] | null {
    const allocations: WarehouseAllocation[] = [];

    for (const component of components) {
      const totalNeeded = component.quantity * quantity;
      let remaining = totalNeeded;

      const availableStocks = this.warehouseStocks
        .filter(ws => ws.materialId === component.materialId && ws.quantity > 0)
        .sort((a, b) => b.quantity - a.quantity);

      for (const stock of availableStocks) {
        if (remaining <= 0) break;

        const allocQty = Math.min(stock.quantity, remaining);
        allocations.push({
          warehouseId: stock.warehouseId,
          materialId: stock.materialId,
          quantity: allocQty
        });

        remaining -= allocQty;
      }

      if (remaining > 0) {
        console.error(`Insufficient stock for material ${component.materialId}`);
        return null;
      }
    }

    return allocations;
  }

  editOrder(order: ProductionOrder): void {
    this.selectedOrder = order;
    this.orderForm.setValue({
      productId: order.productId,
      quantity: order.quantity
    });
  }

  deleteOrder(orderId: string): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.delete(orderId).subscribe(() => this.loadData());
    }
  }

  markAsCompleted(order: ProductionOrder): void {
  const warehouseId = this.finishedProductWarehouseId;

  const sourceWarehouses = Array.from(
    new Set(order.warehouseAllocations.map(a => a.warehouseId))
  );

  this.finishedProductStockService.getByWarehouseAndProduct(warehouseId, order.productId).subscribe(existing => {
    if (existing) {
      const updated = {
        ...existing,
        quantity: existing.quantity + order.quantity,
        sourceWarehouses: Array.from(new Set([...(existing.sourceWarehouses || []), ...sourceWarehouses]))
      };
      this.finishedProductStockService.update(updated).subscribe();
    } else {
      const newStock = {
        warehouseId,
        productId: order.productId,
        quantity: order.quantity,
        sourceWarehouses: sourceWarehouses
      };
      this.finishedProductStockService.create(newStock).subscribe();
    }

   const updatedOrder = { ...order, status: 'Completed' };
  });
}


  // const updatedOrder = { ...order, status: 'Completed' };

  resetForm(): void {
    this.selectedOrder = null;
    this.orderForm.reset({ quantity: 1 });
  }

  getProductName(id: string): string {
    return this.products.find(p => p.id === id)?.name || 'Unknown';
  }

  getMaterialName(id: string): string {
    return this.materials.find(m => m.id === id)?.name || id;
  }

 
  getWarehouseName(id: string): string {
  return this.warehouses.find(w => w.id === id)?.name || id;
}


}
