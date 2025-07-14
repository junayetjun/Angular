import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallproduct',
  standalone: false,
  templateUrl: './viewallproduct.html',
  styleUrl: './viewallproduct.css'
})
export class Viewallproduct implements OnInit {


  retailers: any;


constructor(
  private productService: ProductService,
  private router: Router,
  private cdr : ChangeDetectorRef
){}



  ngOnInit(): void {
   this.loadAllProduct();
  }



  loadAllProduct(){
    this.retailers =this.productService.getAllProducts();
    console.log(this.retailers);
  }



  deleteProductById(id: string): void{
    this.productService.deleteProductById(id).subscribe({
      next: (res) => {
        console.log('Product Saved');
        this.loadAllProduct();
        this.cdr.reattach();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  getProductById(id: string): void{
    this.productService.getProductById(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log('Data get successfully');
        this.router.navigate(['/']);
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }


}
