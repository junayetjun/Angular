import { Component, OnInit } from '@angular/core';
import { Product, ProductComponent } from '../../model/product';
import { RawMaterial } from '../../model/raw-material';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { RawMaterialService } from '../../service/raw-material.service';

@Component({
  selector: 'app-products.component',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

   products: Product[] = [];
  rawMaterials: RawMaterial[] = [];
  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private materialService: RawMaterialService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadMaterials();
    this.initForm();
  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      components: this.fb.array([])
    });
  }

  loadProducts() {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  loadMaterials() {
    this.materialService.getAll().subscribe(data => this.rawMaterials = data);
  }

  get components(): FormArray {
    return this.productForm.get('components') as FormArray;
  }

  addComponent() {
    this.components.push(this.fb.group({
      materialId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    }));
  }

  removeComponent(index: number) {
    this.components.removeAt(index);
  }

  saveProduct() {
    if (this.productForm.invalid) return;

    const product: Product = this.productForm.value;
    product.id = Math.random().toString(36).substring(2, 6); // simple ID generation

    this.productService.create(product).subscribe(() => {
      this.productForm.reset();
      this.components.clear();
      this.loadProducts();
    });
  }

  getMaterialName(id: string): string {
    return this.rawMaterials.find(m => m.id === id)?.name || 'Unknown';
  }

}
