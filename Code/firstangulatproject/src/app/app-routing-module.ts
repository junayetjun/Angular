import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Allemployee } from './allemployee/allemployee';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { Exampleaddstudent } from './exampleaddstudent/exampleaddstudent';

const routes: Routes = [
  {path:'', component:Home },
  {path:'allemployee', component: Allemployee},
  {path:'allstu', component: ViewAllStudent},
  {path:'addstu', component: Addstudent},
  {path:'exaddstu', component: Exampleaddstudent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
