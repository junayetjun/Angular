import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Registration } from './auth/registration/registration';
import { About } from './about/about';

const routes: Routes = [
  {path:'', component:Home},
  {path:'login', component:Login},
  {path:'reg', component:Registration},
  {path:'about', component:About},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
