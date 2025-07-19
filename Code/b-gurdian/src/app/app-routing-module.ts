import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Registration } from './auth/registration/registration';
import { About } from './about/about';
import { Userprofile } from './auth/userprofile/userprofile';
import { Adminprofile } from './auth/adminprofile/adminprofile';
import { Logout } from './auth/logout/logout';
import { Addsource } from './source/addsource/addsource';
import { Viewallsource } from './source/viewallsource/viewallsource';
import { Addproduct } from './inventory/addproduct/addproduct';
import { DepositCalculator } from './deposit-calculator/deposit-calculator';

const routes: Routes = [
  {path:'', component:Home},
  {path:'login', component:Login},
  {path:'reg', component:Registration},
  {path:'about', component:About},
  {path:'userprofile', component:Userprofile},
  {path:'adminprofile', component:Adminprofile},
  {path:'logout', component:Logout},
  {path:'addsou', component:Addsource},
  {path:'viewallsource', component:Viewallsource},
  {path:'addpro', component:Addproduct},
  {path:'deposit', component:DepositCalculator},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
