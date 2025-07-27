import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../../model/warehouse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WarehouseService } from '../../service/warehouse.service';

@Component({
  selector: 'app-warehouses.component',
  standalone: false,
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css'
})
export class WarehousesComponent implements OnInit {

  warehouses: Warehouse[] = [];
  warehouseForm!: FormGroup;
  isEditMode = false;
  editId: string | null = null;

  constructor(private fb: FormBuilder, private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.warehouseForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]]
    });

    this.loadWarehouses();
  }

  loadWarehouses(): void {
    this.warehouseService.getAll().subscribe(warehouses => {
      this.warehouses = warehouses;
    });

  }

  submitForm(): void {
    if (this.warehouseForm.invalid) return;

    const warehouse: Warehouse = this.warehouseForm.value;

    if (this.isEditMode && this.editId) {
      warehouse.id = this.editId;
      this.warehouseService.update(warehouse).subscribe(() => {
        this.loadWarehouses();
        this.cancelEdit();
      });
    } else {
      this.warehouseService.create(warehouse).subscribe(() => {
        this.loadWarehouses();
        this.warehouseForm.reset({ name: '', location: '', capacity: 0 });
      });
    }
  }

  editWarehouse(warehouse: Warehouse): void {
    this.warehouseForm.patchValue(warehouse);
    this.isEditMode = true;
    this.editId = warehouse.id!;
  }

  deleteWarehouse(id: string): void {
    if (confirm('Delete this warehouse?')) {
      this.warehouseService.delete(id).subscribe(() => {
        this.loadWarehouses();
      });
    }
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.editId = null;
    this.warehouseForm.reset({ name: '', location: '', capacity: 0 });
  }
}
