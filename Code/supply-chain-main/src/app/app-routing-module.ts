import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { OrderComponent } from './order/order/order-component/order-component';
import { Addorder } from './order/addorder/addorder';
import { Orderconfirm } from './order/orderconfirm/orderconfirm';
import { Oneuserorder } from './order/oneuserorder/oneuserorder';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'addord', component: Addorder},
  {path: 'orderconfirm', component: Orderconfirm},
  {path: 'userorder', component: Oneuserorder},
  {path: 'ordercom', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
