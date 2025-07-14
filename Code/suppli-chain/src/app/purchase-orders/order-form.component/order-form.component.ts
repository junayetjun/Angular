import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { PurchaseOrder } from '../models/order.model/order.model';
import { Item } from '../../warehouse/warehouse.model/warehuse-item-model';

@Component({
  selector: 'app-order-form',
  standalone: false,
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  form: FormGroup;

 

  constructor(
    private fb: FormBuilder,
    private svc: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      // id: [null],
      orderNumber: ['', Validators.required],
      supplier: ['', Validators.required],
      date: [new Date().toISOString().substring(0, 10), Validators.required],
      status: ['Draft', Validators.required],
      items: this.fb.array([])
    });
  }

  get items() { return this.form.get('items') as FormArray; }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.svc.getOrder(id).subscribe(o => {
        this.form.patchValue(o);
        // TODO: Manually populate FormArray for items
      });
    }
  }

  addItem() {
    this.items.push(this.fb.group({
      // productId: [null, Validators.required],
      productName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]]
    }));
  }

  removeItem(idx: number) { this.items.removeAt(idx); }

  save() {
    if (this.form.invalid) return;
    const po: PurchaseOrder = this.form.value;
    const action = po.id ? this.svc.updateOrder(po) : this.svc.createOrder(po);
    action.subscribe(() => this.router.navigate(['/purchase-orders']));
  }

  cancel() { this.router.navigate(['/purchase-orders']); }

  get total(): number {
    return this.items.controls.reduce((sum, ctrl) => {
      const v = ctrl.value;
      return sum + (v.quantity * v.unitPrice);
    }, 0);
  }
}
