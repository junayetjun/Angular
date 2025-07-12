import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OrderModel } from '../../model/ordermodel';
import { OrderService } from '../../service/order-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oneuserorder',
  standalone: false,
  templateUrl: './oneuserorder.html',
  styleUrl: './oneuserorder.css'
})
export class Oneuserorder implements OnInit {


  id: string = '';
  orderModel: OrderModel = new OrderModel();


  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}


  ngOnInit(): void {
    this.loadOrderById();
  }


  loadOrderById() {

    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrderById(this.id).subscribe({
      next: (res) => {
        this.orderModel = res;
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Error fetching order: ', err);
      }

    });

  }




  updateOrder(): void {

    this.orderService.updateOrder(this.id, this.orderModel)
    .subscribe({

      next: () => {

        this.router.navigate(['/selforder']);
      },
      error: (err) => {
        console.error('Updated failed', err);
      }


    });

  }




}
