import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcaregiverComponent } from './caregiver/addcaregiver.component/addcaregiver.component';

const routes: Routes = [
  {path:'', component: AddcaregiverComponent},
  {path:'addcare', component: AddcaregiverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
