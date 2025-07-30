import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component/raw-materials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SuppliersComponent } from './suppliers/suppliers.component/suppliers.component';
import { ProductsComponent } from './products/products.component/products.component';
import { OrdersComponent } from './orders/orders.component/orders.component';
import { WarehouseStockComponent } from './warehouse-stock/warehouse-stock.component/warehouse-stock.component';
import { WarehouseTransferComponent } from './warehouse-transfer.component/warehouse-transfer.component';
import { RouterModule } from '@angular/router';
import { WarehousesComponent } from './warehouse-stock/warehouses.component/warehouses.component';
import { AddStockComponent } from './add-stock.component/add-stock.component';
import { ProductionOrderComponent } from './production/production-order.component/production-order.component';
import { FinishedProductStockComponent } from './products/finished-product-stock.component/finished-product-stock.component';
import { HeaderComponenet } from './header/header.componenet/header.componenet';
import { DeliveryComponent } from './delivery/delivery.component/delivery.component';



@NgModule({
  declarations: [
    App,
    RawMaterialsComponent,
    SuppliersComponent,
    ProductsComponent,
    OrdersComponent,
    WarehouseStockComponent,
    WarehouseTransferComponent,
    WarehousesComponent,
    AddStockComponent,
    ProductionOrderComponent,
    FinishedProductStockComponent,
    HeaderComponenet,
    DeliveryComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
