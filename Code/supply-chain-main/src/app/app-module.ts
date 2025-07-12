import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { OrderComponent } from './order/order/order-component/order-component';
import { Addorder } from './order/addorder/addorder';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Orderconfirm } from './order/orderconfirm/orderconfirm';
import { Oneuserorder } from './order/oneuserorder/oneuserorder';

@NgModule({
  declarations: [
    App,
    Home,
    OrderComponent,
    Addorder,
    Orderconfirm,
    Oneuserorder
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
