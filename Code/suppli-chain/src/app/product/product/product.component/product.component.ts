import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product.component',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {



  productGroup !: FormGroup;

  constructor(
    private productService : ProductService,
    private fromBuilder : FormBuilder,
    private router : Router

  ){ }


  ngOnInit(): void {
    
    this.productGroup = this.fromBuilder.group({

      name : [''],
      description : [''],
      photo : ['']

    });
    
  }

  addProduct(): void{

    const product: Product = {...this.productGroup.value};

    this.productService.saveProduct(product).subscribe({

      next: (res) => {

        console.log("Product Saved", res)
        this.productGroup.reset();
        this.router.navigate(['/allstu']);

      },

      error: (error) => {
        console.log(error);
      }


    });

  }



  // products: Product[] = [];
  // product: Product = new Product;
  // imageFiles?: File;
  // isEditMode: boolean = false;


  // constructor(
  //   private productService: ProductService,
  //   private router: Router
  // ) { }


  // ngOnInit(): void {
  //   this.loadProducts();
  // }


  // private loadProducts(): void {
  //   this.productService.getAllProducts().subscribe({
  //     next: (response: ApiResponse) => {
  //       if (response && response.success) {
  //         this.products = response.data['products'];
  //       }
  //     },
  //     error: (error) => {
  //       NotifyUtil.error(error);
  //     }
  //   });
  // }


  // onImagePicked(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.imageFiles = input.files[0];
  //   }
  // }


  // onSubmit(): void {
  //   const productObserable = this.isEditMode
  //     ? this.productService.updateProduct(this.product, this.imageFiles)
  //     : this.productService.saveProduct(this.product, this.imageFiles);

  //   productObserable.subscribe({
  //     next: (response: ApiResponse) => {
  //       if (response && response.success) {
  //         NotifyUtil.success(response);
  //         this.resetForm();
  //         this.loadProducts();
  //       } else {
  //         NotifyUtil.error(response.message);
  //       }
  //     },
  //     error: (error) => {
  //       NotifyUtil.error(error);
  //     }
  //   });
  // }



  // editProduct(productId: number): void {
  //   this.productService.getProductById(productId).subscribe({
  //     next: (response: ApiResponse) => {
  //       if (response && response.success) {
  //         this.product = response.data['product'];
  //         this.isEditMode = true;
  //       } else {
  //         NotifyUtil.error(response.message);
  //       }
  //     },
  //     error: (error) => {
  //       NotifyUtil.error(error);
  //     }
  //   });
  // }




  // deleteProduct(id: number): void {
  //   if (confirm('Are you sure you want to delete this product?')) {
  //     this.productService.deleteProductById(id).subscribe({
  //       next: (response: ApiResponse) => {
  //         if (response && response.success) {
  //           NotifyUtil.success(response);
  //           this.loadProducts();
  //         } else {
  //           NotifyUtil.error(response.message);
  //         }
  //       },
  //       error: (error) => {
  //         NotifyUtil.error(error);
  //       }
  //     });
  //   }
  // }



  // resetForm(): void {
  //   this.product = new Product();
  //   this.imageFiles = undefined;
  //   this.isEditMode = false;
  // }


  // addNewProduct(): void {
  //   this.resetForm();
  //   this.isEditMode = false;
  // }



}
