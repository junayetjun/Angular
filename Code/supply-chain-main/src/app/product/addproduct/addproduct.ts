import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from '../../model/productmodel';
import { ProductService } from '../../service/product-service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.html',
  styleUrls: ['./addproduct.css']
})
export class Addproduct implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      productType: [''],
      shoulder: this.formBuilder.array([]),
      size: this.formBuilder.array([]),
      quantity: [''],
      color: this.formBuilder.array([]),
    });
  }

  // Utility method to handle checkbox changes
  onCheckboxChange(event: Event, controlName: string): void {
    const checkbox = event.target as HTMLInputElement;
    const formArray: FormArray = this.formGroup.get(controlName) as FormArray;

    if (checkbox.checked) {
      formArray.push(new FormControl(checkbox.value));
    } else {
      const index = formArray.controls.findIndex(x => x.value === checkbox.value);
      if (index !== -1) {
        formArray.removeAt(index);
      }
    }
  }

  addProduct(): void {
    const productModel: ProductModel = { ...this.formGroup.value };

    this.productService.saveProduct(productModel).subscribe({
      next: (res) => {
        console.log('Product Saved', res);
        this.formGroup.reset();
        this.router.navigate(['/viewsaveproduct']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
