import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcaregiverComponent } from './caregiver/addcaregiver.component/addcaregiver.component';
import { CategoryComponent } from './category/category.component/category.component';
import { ParentRegistration } from './parent/parent-registration/parent-registration';

const routes: Routes = [
  {path:'', component: ParentRegistration},
  {path:'addcare', component: AddcaregiverComponent},
  {path:'addcategory', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
