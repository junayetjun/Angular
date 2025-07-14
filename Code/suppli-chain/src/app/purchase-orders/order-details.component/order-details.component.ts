import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../models/order.model/order.model';
import { OrderService } from '../service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details.component',
  standalone: false,
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {


  order?: PurchaseOrder;
  constructor(
    private svc: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.svc.getOrder(id).subscribe(o => this.order = o);
  }


}
