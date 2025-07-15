import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RawmatModule { 
  id?: string;
  productName!: string;
  companyName!: string;
  contactPerson!: string;
  contactNumber!: string;
  quantity!: number;
  unitPrice!: number;
  totalPrice! : number;
  dateL!: Date;
}
