import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { WarehouseComponent } from './warehouse/warehouse.component/warehouse.component';
import { WarehouseProductDialog } from './warehouse/warehouse.product.dialog/warehouse.product.dialog';
import { ProdProductList } from './production/prod-product/prod-product-list/prod-product-list';
import { ProdProductCreate } from './production/prod-product/prod-product-create/prod-product-create';

import { RawMatUsage } from './production/rawMatUsage/raw-mat-usage/raw-mat-usage';
import { WarehouseSelectDialog } from './production/warehouse-select-dialog/warehouse-select-dialog';
import { InventoryCreate } from './inventory/inventory/inventory-create/inventory-create';
import { RawMaterialCategoryListComponent } from './inventory/raw-material-category/raw-material-category-list.component/raw-material-category-list.component';
import { RawMaterialCreate } from './inventory/raw-materials/raw-material-create/raw-material-create';
import { RawMaterialList } from './inventory/raw-materials/raw-material-list/raw-material-list';
import { SupplierCreate } from './inventory/suppliers/supplier-create/supplier-create';
import { SupplierList } from './inventory/suppliers/supplier-list/supplier-list';
import { Invoice } from './invoice/invoice/invoice';
import { PdfGenerator } from './invoice/pdf-generator/pdf-generator';

import { RetailerList } from './product/retailer/retailer-list/retailer-list';
import { RetailerCreateDialog } from './product/retailer/retailer-create-dialog/retailer-create-dialog';
import { ProductComponent } from './product/product/product.component/product.component';
import { RetailerComponent } from './product/retailer/retailer-component/retailer-component';

@NgModule({
  declarations: [
    App,    
    WarehouseComponent,
    WarehouseProductDialog,
    ProdProductList,
    ProdProductCreate,    
    RawMatUsage,
    WarehouseSelectDialog,
    InventoryCreate,    
    RawMaterialCategoryListComponent,
    RawMaterialCreate,
    RawMaterialList,
    SupplierCreate,
    SupplierList,
    Invoice,
    PdfGenerator,
    
    RetailerList,    
    RetailerCreateDialog, ProductComponent, RetailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
