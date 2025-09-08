import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcaregiverComponent } from './caregiver/addcaregiver.component/addcaregiver.component';
import { CategoryComponent } from './category/category.component/category.component';
import { ParentRegistration } from './parent/parent-registration/parent-registration';
import { Caregiverprofile } from './caregiver/caregiverprofile/caregiverprofile';
import { ParentList } from './parent/parent-list/parent-list';
import { Profilecomponent } from './parent/profilecomponent/profilecomponent';
import { Login } from './auth/login/login';
import { CaregiverListComponent } from './caregiver/caregiver-list.component/caregiver-list.component';
import { Home } from './home/home';
import { Addcategory } from './category/addcategory/addcategory';
import { Addjob } from './jobs/addjob/addjob';
import { Addlocation } from './locations/addlocation/addlocation';

const routes: Routes = [
  {path:'caregiverpro', component: Caregiverprofile},
  {path:'addcare', component: AddcaregiverComponent},
  {path:'parentlist', component: ParentList},
  {path:'addcategory', component: CategoryComponent},
  {path:'addparent', component: ParentRegistration},
  {path:'parentrofile', component: Profilecomponent},
  {path:'login', component: Login},
  {path:'caregiverlist', component: CaregiverListComponent},
  // {path:'', component: Caregiverprofile},
  {path:'', component: Home},
  {path:'home', component: Home},
  {path:'addcat', component: Addcategory},
  {path:'addjob', component: Addjob},
  {path:'addloc', component: Addlocation},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
