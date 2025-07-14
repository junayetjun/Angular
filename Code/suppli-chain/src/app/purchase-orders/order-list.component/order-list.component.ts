import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../models/order.model/order.model';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list.component',
  standalone: false,
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {

  orders: PurchaseOrder[] = [];
  loading = true;

  constructor(private svc: OrderService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.svc.getOrders().subscribe(data => {
      this.orders = data;
      this.loading = false;
    });
  }

  delete(id?: string) {
    if (id && confirm('Delete this order?')) {
      this.svc.deleteOrder(id).subscribe(() => this.refresh());
    }
  }

  edit(id: string) {
    this.router.navigate(['/purchase-orders', id]);
  }

  add() {
    this.router.navigate(['/purchase-orders/add']);
  }



}
