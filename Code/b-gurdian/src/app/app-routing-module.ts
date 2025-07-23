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
import { StockPriceEstimateComponent } from './stock-price-estimate.component/stock-price-estimate.component';
import { AddcompanygrowthComponent } from './companygrowth/addcompanygrowth.component/addcompanygrowth.component';
import { ViewallcompanygrowthComponent } from './companygrowth/viewallcompanygrowth.component/viewallcompanygrowth.component';
import { UpdatecompanygrowthComponent } from './companygrowth/updatecompanygrowth.component/updatecompanygrowth.component';
import { adminGuard } from './guard/admin-guard';


const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'reg', component: Registration },
  { path: 'about', component: About },
  { path: 'userprofile', component: Userprofile },
  { path: 'adminprofile', component: Adminprofile },
  { path: 'logout', component: Logout },
  { path: 'addsou', component: Addsource, canActivate: [adminGuard] },
  { path: 'viewallsource', component: Viewallsource, canActivate: [adminGuard] },
  { path: 'addpro', component: Addproduct },
  { path: 'deposit', component: DepositCalculator },
  { path: 'stock', component: StockPriceEstimateComponent },
  { path: 'addcompany', component: AddcompanygrowthComponent, canActivate: [adminGuard] },
  { path: 'viewallcompany', component: ViewallcompanygrowthComponent, canActivate: [adminGuard] },
  { path: 'updatecompanygrowth/:id', component: UpdatecompanygrowthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
