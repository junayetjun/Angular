import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../../service/order-service';
import { Router } from '@angular/router';
import { OrderModel } from '../../model/ordermodel';

@Component({
  selector: 'app-addorder',
  standalone: false,
  templateUrl: './addorder.html',
  styleUrl: './addorder.css'
})
export class Addorder implements OnInit {


  orderForm!: FormGroup;

  constructor(
     private orderService : OrderService,
    private fromBuilder : FormBuilder,
    private router : Router
  ){}


  ngOnInit(): void {
   
    this.orderForm = this.fromBuilder.group({

      productName: [''],
      shoulder: [''],
      size: [''],
      quantity: [''],
      color: [''],


    });

  }


  addOrder(): void{

    const orderModel: OrderModel ={...this.orderForm.value};

    this.orderService.saveOrder(orderModel).subscribe({
      next: (res) => {

        console.log('Order Saved', res);
        this.orderForm.reset();
        this.router.navigate(['/userorder']);
      },
      error: (error) => {
        console.log(error);
      }
    });


  }



}
