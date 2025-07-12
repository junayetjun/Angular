import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderconfirm',
  standalone: false,
  templateUrl: './orderconfirm.html',
  styleUrl: './orderconfirm.css'
})
export class Orderconfirm implements OnInit {


  orderModel: any;


  constructor(
    private orderService: OrderService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}


  ngOnInit(): void {
    this.loadAllOrder();
  }


  loadAllOrder() {

    this.orderModel = this.orderService.getAllOrder();
    console.log(this.orderModel);

  }



  deleteOrder(id: string): void {

    this.orderService.deleteOrder(id).subscribe({

      next: (res) => {
        console.log('Order deleted');
        this.loadAllOrder();
        this.cdr.reattach();
      },

      error: (err) => {

        console.log(err);

      }

    });

  }



  getOrderById(id: string): void {
    this.orderService.getOrderById(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("Data Get Successfully");
        this.router.navigate(['/updateorder', id]);

      },
      error: (err) => {
        console.log(err);
      }


    });


  }




}
