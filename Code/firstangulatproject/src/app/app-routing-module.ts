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

const routes: Routes = [
  {path:'', component:Home },
  {path:'allemployee', component: Allemployee},
  {path:'allstu', component: ViewAllStudent},
  {path:'addstu', component: Addstudent},
  {path:'exaddstu', component: Exampleaddstudent},
  {path:'updatestudent/:id',component:Updatestudent},
  {path:'updatelocation/:id', component: UpdateLocation},
  {path:'allloc', component: ViewAllLocation},
  {path:'addloc', component: Addlocation},
  {path:'reg', component: Registration},
  {path:'login', component: Login},
  {path:'userprofile', component: Userprofile}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
