import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component/raw-materials.component';
import { SuppliersComponent } from './suppliers/suppliers.component/suppliers.component';
import { ProductsComponent } from './products/products.component/products.component';
import { OrdersComponent } from './orders/orders.component/orders.component';
import { WarehouseStockComponent } from './warehouse-stock/warehouse-stock.component/warehouse-stock.component';
import { WarehouseTransferComponent } from './warehouse-transfer.component/warehouse-transfer.component';
import { WarehousesComponent } from './warehouse-stock/warehouses.component/warehouses.component';
import { AddStockComponent } from './add-stock.component/add-stock.component';
import { ProductionOrderComponent } from './production/production-order.component/production-order.component';
import { FinishedProductStockComponent } from './products/finished-product-stock.component/finished-product-stock.component';

const routes: Routes = [
  {path:'addraw', component: RawMaterialsComponent},
  {path:'addsupplier', component: SuppliersComponent},
  {path:'addproduction', component: ProductsComponent},
  {path:'addorder', component: OrdersComponent},
  {path:'warehousestock', component: WarehouseStockComponent},
  {path:'addwarehouse', component: WarehousesComponent},
  {path:'addstock', component: AddStockComponent},
  {path:'transferwarehouse', component: WarehouseTransferComponent},
  {path:'productionorder', component: ProductionOrderComponent},
  {path:'', component: FinishedProductStockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
