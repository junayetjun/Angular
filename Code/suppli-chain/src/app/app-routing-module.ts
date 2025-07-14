import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component/product.component';
import { Viewallproduct } from './product/product/viewallproduct/viewallproduct';
import { ItemListComponent } from './warehouse/item-list.component/item-list.component';
import { ItemFormComponent } from './warehouse/item-form.component/item-form.component';
import { OrderListComponent } from './purchase-orders/order-list.component/order-list.component';
import { OrderFormComponent } from './purchase-orders/order-form.component/order-form.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'additem', component: ItemFormComponent },
  { path: 'item/:id', component: ItemFormComponent },
  {path: 'addprocom', component: ProductComponent},
  {path: 'viewallpro', component: Viewallproduct},
  { path: 'order', component: OrderListComponent },
  { path: 'addorder', component: OrderFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
