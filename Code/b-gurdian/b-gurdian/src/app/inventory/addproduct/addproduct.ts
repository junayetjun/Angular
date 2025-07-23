import { Component, OnInit } from '@angular/core';
import { AddProductModel } from '../../model/addproduct';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddproductService } from '../../service/addproduct-service';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css'
})
export class Addproduct implements OnInit {


  addProductModel: AddProductModel[] = [];
  productForm: FormGroup;
  editing: boolean = false;


constructor(
  private fb: FormBuilder,
  private ps: AddproductService
){
  this.productForm = this.fb.group({
    id: [''],
    productName: ['', Validators.required]
  });
}


  ngOnInit(): void {
    this.loadProduct();
  }

  
loadProduct(){
  this.ps.getAll().subscribe(data => {
    this.addProductModel =data;
  });
}


onSubmit(){
  if(this.productForm.invalid) return;


  if(this.editing){
    this.ps.update(this.productForm.value).subscribe(() => {
      alert('Updated successfully!');
      this.loadProduct();
      this.cancelEdit();
    });
  } else{
    const { productName } = this.productForm.value;
    this.ps.add({ productName }).subscribe(() => {
      alert('Added successfully!');
      this.loadProduct();
      this.productForm.reset();
      this.editing = false;
    });
  }


}


editProduct(productName: AddProductModel){
  this.editing =true;
  this.productForm.patchValue({
    id: productName.id,
    productName: productName.productName
  });
}

deleteProduct(id: string){
  if(confirm('Are you sre?')){
    this.ps.delete(id).subscribe(() => {
      alert('Deleted');
      this.loadProduct();
    })
  }
}



cancelEdit(){
  this.editing =false;
  this.productForm.reset();
}




}
