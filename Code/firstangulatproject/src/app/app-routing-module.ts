import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Allemployee } from './allemployee/allemployee';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { Exampleaddstudent } from './exampleaddstudent/exampleaddstudent';
import { Updatestudent } from './updatestudent/updatestudent';
import { UpdateLocation } from './location/update-location/update-location';
import { ViewAllLocation } from './location/view-all-location/view-all-location';
import { Addlocation } from './location/addlocation/addlocation';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { Userprofile } from './auth/userprofile/userprofile';
import { adminGuard } from './guards/admin-guard';
import { authGuard } from './guards/auth-guard';
import { userGuard } from './guards/user-guard';
import { Admin } from './auth/admin/admin';
import { Logout } from './auth/logout/logout';
import { Addpolicestation } from './police-station/addpolicestation/addpolicestation';
import { AddDistrict } from './district/add-district/add-district';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'allemployee', component: Allemployee },
  { path: 'allstu', component: ViewAllStudent , canActivate: [adminGuard]},
  { path: 'addstu', component: Addstudent, canActivate: [authGuard] },
  { path: 'exaddstu', component: Exampleaddstudent },
  { path: 'updatestudent/:id', component: Updatestudent },
  { path: 'updatelocation/:id', component: UpdateLocation },
  { path: 'allloc', component: ViewAllLocation, canActivate: [adminGuard] },
  { path: 'addloc', component: Addlocation, canActivate: [adminGuard] },
  { path: 'reg', component: Registration },
  { path: 'login', component: Login },
  { path: 'logout', component: Logout },
  { path: 'userprofile', component: Userprofile , canActivate: [userGuard]},
  { path: 'adminprofile', component: Admin, canActivate: [adminGuard] },
  { path: 'addpol', component: Addpolicestation,},
  { path: 'adddis', component: AddDistrict,},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
