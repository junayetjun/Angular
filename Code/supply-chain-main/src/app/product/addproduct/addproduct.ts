import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from '../../model/productmodel';
import { ProductService } from '../../service/product-service';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css'
})
export class Addproduct implements OnInit {

formGroup!: FormGroup;


constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private productService: ProductService
){}



  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      productType: [''],
      shoulder: [[]],
      size: [[]],
      quantity: [[]],
      color: [[]],


    });
  }



addProduct(): void{
  
      const productModel: ProductModel ={...this.formGroup.value};
  
      this.productService.saveProduct(productModel).subscribe({
        next: (res) => {
  
          console.log('Product Saved', res);
          this.formGroup.reset();
          this.router.navigate(['/viewsaveproduct']);
        },
        error: (error) => {
          console.log(error);
        }
      });
  
  
    }
  
  
  
  
  
  }




