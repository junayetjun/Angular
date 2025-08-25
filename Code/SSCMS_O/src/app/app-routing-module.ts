import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcaregiverComponent } from './caregiver/addcaregiver.component/addcaregiver.component';
import { CategoryComponent } from './category/category.component/category.component';
import { ParentRegistration } from './parent/parent-registration/parent-registration';
import { Caregiverprofile } from './caregiver/caregiverprofile/caregiverprofile';

const routes: Routes = [
  {path:'', component: Caregiverprofile},
  {path:'addcare', component: AddcaregiverComponent},
  {path:'addcategory', component: CategoryComponent},
  {path:'addparent', component: ParentRegistration},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
