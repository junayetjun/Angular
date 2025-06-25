import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Alldetails } from './alldetails/alldetails';

const routes: Routes = [
  {path:'',component:Home},
  {path:'allde', component:Alldetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
