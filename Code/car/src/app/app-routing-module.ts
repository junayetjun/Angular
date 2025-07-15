import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrawmatComponent } from './rawmat/addrawmat-component/addrawmat-component';
import { RawmatListComponent } from './rawmat/rawmat-list-component/rawmat-list-component';
import { EditRawmatComponent } from './rawmat/edit-rawmat.component/edit-rawmat.component';
import { AddpartsComponent } from './addparts.component/addparts.component';
import { AddvehicleComponent } from './vehicle/addvehicle.component/addvehicle.component';
import { ViewallvehicleComponent } from './vehicle/viewallvehicle.component/viewallvehicle.component';
import { AddorderComponent } from './order/addorder.component/addorder.component';

const routes: Routes = [
  {path:'', component:AddrawmatComponent},
  {path:'addrawmat', component:AddrawmatComponent},
  {path:'listrawmat', component:RawmatListComponent},
  {path:'editrawmat', component:EditRawmatComponent},
  {path:'addparts', component:AddpartsComponent},
  {path:'addvehicle', component:AddvehicleComponent},
  {path:'allvehicle', component:ViewallvehicleComponent},
  {path:'addorder', component:AddorderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
