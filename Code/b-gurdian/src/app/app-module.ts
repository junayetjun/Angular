import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Registration } from './auth/registration/registration';
import { About } from './about/about';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Userprofile } from './auth/userprofile/userprofile';
import { Adminprofile } from './auth/adminprofile/adminprofile';
import { Logout } from './auth/logout/logout';
import { Addsource } from './source/addsource/addsource';
import { Viewallsource } from './source/viewallsource/viewallsource';
import { Addproduct } from './inventory/addproduct/addproduct';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    Registration,
    About,
    Userprofile,
    Adminprofile,
    Logout,
    Addsource,
    Viewallsource,
    Addproduct
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
