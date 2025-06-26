import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Alldetails } from './alldetails/alldetails';
import { Fullhomepage } from './fullhomepage/fullhomepage';

const routes: Routes = [
  {path:'',component:Fullhomepage},
  {path:'allde', component:Alldetails},
  {path:'homepage', component:Fullhomepage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
