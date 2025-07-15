import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrawmatComponent } from './rawmat/addrawmat-component/addrawmat-component';
import { RawmatListComponent } from './rawmat/rawmat-list-component/rawmat-list-component';
import { EditRawmatComponent } from './rawmat/edit-rawmat.component/edit-rawmat.component';

const routes: Routes = [
  {path:'', component:AddrawmatComponent},
  {path:'addrawmat', component:AddrawmatComponent},
  {path:'listrawmat', component:RawmatListComponent},
  {path:'editrawmat', component:EditRawmatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
