import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery.model';
import { DeliveryService } from '../../service/delivery.service';
import { ProductService } from '../../service/product.service';
import { WarehouseService } from '../../service/warehouse.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../model/product';
import { Warehouse } from '../../model/warehouse';
import { FinishedProductStockService } from '../../service/finished-product-stock.service';
import { FinishedProductStock } from '../../model/finished-product-stock.model';

@Component({
  selector: 'app-delivery.component',
  standalone: false,
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnInit {
  deliveryForm!: FormGroup;
  deliveries: Delivery[] = [];
  products: Product[] = [];
  warehouses: Warehouse[] = [];

  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryService,
    private productService: ProductService,
    private warehouseService: WarehouseService,
    private finishedStockService: FinishedProductStockService
  ) { }

  ngOnInit(): void {
    this.deliveryForm = this.fb.group({
      productId: ['', Validators.required],
      warehouseId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    this.loadData();
  }

  loadData(): void {
    this.deliveryService.getAll().subscribe(data => this.deliveries = data);
    this.productService.getAll().subscribe(data => this.products = data);
    this.warehouseService.getAll().subscribe(data => this.warehouses = data);
  }

  submitDelivery(): void {
    if (this.deliveryForm.invalid) return;

    const formValue = this.deliveryForm.value;
    const delivery: Delivery = {
      ...formValue,
      date: new Date().toISOString()
    };

    this.finishedStockService.getByWarehouseAndProduct(delivery.warehouseId, delivery.productId).subscribe(stock => {
      if (!stock || stock.quantity < delivery.quantity) {
        alert('Insufficient stock to deliver!');
        return;
      }

      const updatedStock: FinishedProductStock = {
        ...stock,
        quantity: stock.quantity - delivery.quantity
      };

      this.finishedStockService.update(updatedStock).subscribe(() => {
        this.deliveryService.create(delivery).subscribe(() => {
          this.deliveryForm.reset({ quantity: 1 });
          this.loadData();
        });
      });
    });
  }

  getProductName(id: string): string {
    return this.products.find(p => p.id === id)?.name || 'Unknown';
  }

  getWarehouseName(id: string): string {
    return this.warehouses.find(w => w.id === id)?.name || 'Unknown';
  }
}
