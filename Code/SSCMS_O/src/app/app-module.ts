import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddcaregiverComponent } from './caregiver/addcaregiver.component/addcaregiver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { CategoryComponent } from './category/category.component/category.component';
import { ParentRegistration } from './parent/parent-registration/parent-registration';
import { Caregiverprofile } from './caregiver/caregiverprofile/caregiverprofile';

@NgModule({
  declarations: [
    App,
    AddcaregiverComponent,
    Navbar,
    Sidebar,
    Footer,
    Header,
    CategoryComponent,
    ParentRegistration,
    Caregiverprofile
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
