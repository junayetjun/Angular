import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order';
import { Product } from '../../model/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../service/order.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-orders.component',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  products: Product[] = [];
  orderForm!: FormGroup;
  isEditMode = false;
  editId: string | null = null;

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadOrders();
    this.loadProducts();

    this.orderForm = this.fb.group({
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      status: ['Pending'],
      createdAt: [new Date().toISOString()]
    });
  }


  loadOrders(): void {
    this.orderService.getAll().subscribe(data => {
      this.orders = data;
    });
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  submitForm(): void {
    if (this.orderForm.invalid) return;

    const newOrder: Order = this.orderForm.value;

    if (this.isEditMode && this.editId) {
      newOrder.id = this.editId;
      this.orderService.update(newOrder).subscribe(() => {
        this.loadOrders();
        this.resetForm();
      });
    } else {
      this.orderService.create(newOrder).subscribe(() => {
        this.loadOrders();
        this.resetForm();
      });
    }
  }

  getProductName(productId: string): string {
  const product = this.products.find(p => p.id === productId);
  return product ? product.name : 'Unknown Product';
}


  editOrder(order: Order): void {
    this.isEditMode = true;
    this.editId = order.id!;
    this.orderForm.patchValue(order);
  }

  deleteOrder(id: string): void {
    if (confirm('Delete this production order?')) {
      this.orderService.delete(id).subscribe(() => {
        this.loadOrders();
      });
    }
  }

  resetForm(): void {
    this.isEditMode = false;
    this.editId = null;
    this.orderForm.reset({
      productId: '',
      quantity: 1,
      status: 'Pending',
      createdAt: new Date().toISOString()
    });
  }

  updateStatus(order: Order, status: Order['status']): void {
    const updated = { ...order, status };
    this.orderService.update(updated).subscribe(() => {
      this.loadOrders();
    });
  }

}
