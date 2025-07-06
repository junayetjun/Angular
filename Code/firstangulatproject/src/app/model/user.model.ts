
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class User {

    id!: string;
    name!: string;
    email!: string;
    password!: string;
    role!: string;
    photo!: string;

}