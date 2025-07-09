import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Allemployee } from './allemployee/allemployee';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Addstudent } from './addstudent/addstudent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exampleaddstudent } from './exampleaddstudent/exampleaddstudent';
import { Updatestudent } from './updatestudent/updatestudent';
import { Addlocation } from './location/addlocation/addlocation';
import { UpdateLocation } from './location/update-location/update-location';
import { ViewAllLocation } from './location/view-all-location/view-all-location';
import { Login } from './auth/login/login';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Logout } from './auth/logout/logout';
import { Admin } from './auth/admin/admin';
import { Addpolicestation } from './police-station/addpolicestation/addpolicestation';
import { AddDistrict } from './district/add-district/add-district';
import { ViewAllDistrict } from './district/view-all-district/view-all-district';
import { AddDivision } from './division/add-division/add-division';

@NgModule({
  declarations: [
    App,
    Home,
    Allemployee,    
    ViewAllStudent,
    Addstudent,
    Exampleaddstudent,
    Updatestudent,    
    Addlocation,
    UpdateLocation,
    ViewAllLocation,
    Login,
    Registration,
    Userprofile,
    Logout,
    Admin,
    Addpolicestation,
    AddDistrict,
    ViewAllDistrict,
    AddDivision
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
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
