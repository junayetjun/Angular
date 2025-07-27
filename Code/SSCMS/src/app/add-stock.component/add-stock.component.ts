import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RawMaterial } from '../model/raw-material';
import { Warehouse } from '../model/warehouse';
import { WarehouseStockService } from '../service/warehouse-stock.service';
import { RawMaterialService } from '../service/raw-material.service';
import { WarehouseService } from '../service/warehouse.service';
import { WarehouseStock } from '../model/warehouse-stock.model';

@Component({
  selector: 'app-add-stock.component',
  standalone: false,
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent implements OnInit {

  stockForm!: FormGroup;
  materials: RawMaterial[] = [];
  warehouses: Warehouse[] = [];

  constructor(
    private fb: FormBuilder,
    private stockService: WarehouseStockService,
    private materialService: RawMaterialService,
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      warehouseId: ['', Validators.required],
      materialId: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]]
    });

    this.materialService.getAll().subscribe(data => this.materials = data);
    this.warehouseService.getAll().subscribe(data => this.warehouses = data);
  }

  onSubmit(): void {
    if (this.stockForm.invalid) return;

    const formValue = this.stockForm.value;

    this.stockService.getByWarehouseAndMaterial(formValue.warehouseId, formValue.materialId)
      .subscribe(existing => {
        if (existing) {
          // Update stock
          const updated: WarehouseStock = {
            ...existing,
            quantity: existing.quantity + formValue.quantity
          };
          this.stockService.update(updated).subscribe(() => {
            alert('Stock updated successfully');
            this.stockForm.reset();
          });
        } else {
          // Create new stock
          const newStock: WarehouseStock = {
            warehouseId: formValue.warehouseId,
            materialId: formValue.materialId,
            quantity: formValue.quantity
          };
          this.stockService.create(newStock).subscribe(() => {
            alert('Stock added successfully');
            this.stockForm.reset();
          });
        }
      });
  }

}
