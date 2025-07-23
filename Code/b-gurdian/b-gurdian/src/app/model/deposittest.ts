
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class DepositModel {
  amount!: number;
  years!: number;
  rate!: number;

  interest!: number;
  tax!: number;
  finalAmount!: number;
}
