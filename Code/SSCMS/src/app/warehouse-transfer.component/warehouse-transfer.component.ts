import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RawMaterial } from '../model/raw-material';
import { Warehouse } from '../model/warehouse';
import { StockTransfer } from '../model/stock-transfer.model';
import { StockTransferService } from '../service/stock-transfer.service';
import { RawMaterialService } from '../service/raw-material.service';
import { WarehouseService } from '../service/warehouse.service';
import { WarehouseStockService } from '../service/warehouse-stock.service';

@Component({
  selector: 'app-warehouse-transfer.component',
  standalone: false,
  templateUrl: './warehouse-transfer.component.html',
  styleUrl: './warehouse-transfer.component.css'
})
export class WarehouseTransferComponent implements OnInit {

  transferForm!: FormGroup;
  warehouses: Warehouse[] = [];
  materials: RawMaterial[] = [];
  transferHistory: StockTransfer[] = [];

  constructor(
    private fb: FormBuilder,
    private transferService: StockTransferService,
    private warehouseService: WarehouseService,
    private materialService: RawMaterialService,
    private stockService: WarehouseStockService,

  ) { }

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      materialId: ['', Validators.required],
      fromWarehouseId: ['', Validators.required],
      toWarehouseId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    this.loadData();
  }

  loadData(): void {
    this.warehouseService.getAll().subscribe(data => this.warehouses = data);
    this.materialService.getAll().subscribe(data => this.materials = data);
    this.transferService.getAll().subscribe(data => this.transferHistory = data);
  }

  submitTransfer(): void {
  if (this.transferForm.invalid) return;

  const transfer: StockTransfer = {
    ...this.transferForm.value,
    date: new Date().toISOString()
  };

  // Save transfer record
  this.transferService.create(transfer).subscribe(() => {
    // Adjust stocks in both warehouses
    const { materialId, fromWarehouseId, toWarehouseId, quantity } = transfer;

    this.adjustStock(fromWarehouseId, materialId, -quantity);
    this.adjustStock(toWarehouseId, materialId, quantity);

    this.transferForm.reset();
    this.transferForm.patchValue({ quantity: 1 });
    this.loadData();
  });
}

adjustStock(warehouseId: string, materialId: string, quantityChange: number): void {
  this.stockService.getByWarehouseAndMaterial(warehouseId, materialId).subscribe(stock => {
    if (stock) {
      const newQty = stock.quantity + quantityChange;

      const updated = { ...stock, quantity: newQty < 0 ? 0 : newQty };

      this.stockService.update(updated).subscribe(() => {
        this.loadData?.(); // Refresh UI if loadData() exists
      });
    } else {
      // Only allow creating new stock if adding (not subtracting)
      if (quantityChange > 0) {
        const newStock = {
          id: Math.random().toString(36).substring(2, 6),
          warehouseId,
          materialId,
          quantity: quantityChange
        };
        this.stockService.create(newStock).subscribe(() => {
          this.loadData?.(); // Refresh UI
        });
      }
    }
  });
}



  getMaterialName(id: string): string {
    return this.materials.find(m => m.id === id)?.name || 'Unknown';
  }

  getWarehouseName(id: string): string {
    return this.warehouses.find(w => w.id === id)?.name || 'Unknown';
  }
}
