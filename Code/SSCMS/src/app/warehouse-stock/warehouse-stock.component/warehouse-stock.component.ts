import { Component, OnInit } from '@angular/core';
import { WarehouseStock } from '../../model/warehouse-stock.model';
import { RawMaterial } from '../../model/raw-material';
import { WarehouseStockService } from '../../service/warehouse-stock.service';
import { RawMaterialService } from '../../service/raw-material.service';
import { Warehouse } from '../../model/warehouse';
import { WarehouseService } from '../../service/warehouse.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-warehouse-stock.component',
  standalone: false,
  templateUrl: './warehouse-stock.component.html',
  styleUrl: './warehouse-stock.component.css'
})
export class WarehouseStockComponent implements OnInit {

 
  stocks: WarehouseStock[] = [];
  materials: RawMaterial[] = [];
  warehouses: Warehouse[] = [];

  stockForm!: FormGroup;

  constructor(
    private stockService: WarehouseStockService,
    private materialService: RawMaterialService,
    private warehouseService: WarehouseService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      warehouseId: ['', Validators.required],
      materialId: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]]
    });

    this.loadData();
  }

  loadData(): void {
    this.stockService.getAll().subscribe(stockData => this.stocks = stockData);
    this.materialService.getAll().subscribe(materials => this.materials = materials);
    this.warehouseService.getAll().subscribe(warehouses => this.warehouses = warehouses);
  }

  addStock(): void {
    if (this.stockForm.invalid) return;

    const { warehouseId, materialId, quantity } = this.stockForm.value;

    this.stockService.getByWarehouseAndMaterial(warehouseId, materialId).subscribe(existing => {
      if (existing) {
        const updated = { ...existing, quantity: existing.quantity + quantity };
        this.stockService.update(updated).subscribe(() => {
          this.loadData();
          this.stockForm.reset();
        });
      } else {
        const newStock: WarehouseStock = {
          id: Math.random().toString(36).substring(2, 6),
          warehouseId,
          materialId,
          quantity
        };
        this.stockService.create(newStock).subscribe(() => {
          this.loadData();
          this.stockForm.reset();
        });
      }
    });
  }

  getMaterialName(materialId: string): string {
    return this.materials.find(m => m.id === materialId)?.name || 'Unknown';
  }

  getWarehouseName(warehouseId: string): string {
    return this.warehouses.find(w => w.id === warehouseId)?.name || 'Unknown';
  }

  isLowStock(stock: WarehouseStock): boolean {
    const material = this.materials.find(m => m.id === stock.materialId);
    return material ? stock.quantity < material.threshold : false;
  }

}
