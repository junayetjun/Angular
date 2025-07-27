import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../model/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../service/supplier.service';

@Component({
  selector: 'app-suppliers.component',
  standalone: false,
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[] = [];
  supplierForm!: FormGroup;
  isEditMode = false;
  editId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      name: ['', Validators.required],
      contactName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['']
    });

    this.loadSuppliers();
  }

  loadSuppliers(): void {
    this.supplierService.getAll().subscribe(data => {
      this.suppliers = data;
    });
  }

  submitForm(): void {
    if (this.supplierForm.invalid) return;

    const supplier: Supplier = this.supplierForm.value;

    if (this.isEditMode && this.editId) {
      supplier.id = this.editId;
      this.supplierService.update(supplier).subscribe(() => {
        this.loadSuppliers();
        this.cancelEdit();
      });
    } else {
      this.supplierService.create(supplier).subscribe(() => {
        this.loadSuppliers();
        this.resetForm();
      });
    }
  }

  editSupplier(supplier: Supplier): void {
    this.supplierForm.patchValue(supplier);
    this.isEditMode = true;
    this.editId = supplier.id!;
  }

  deleteSupplier(id: string): void {
    if (confirm('Delete this supplier?')) {
      this.supplierService.delete(id).subscribe(() => {
        this.loadSuppliers();
      });
    }
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.editId = null;
    this.resetForm();
  }

  resetForm(): void {
    this.supplierForm.reset({
      name: '',
      contactName: '',
      email: '',
      phone: '',
      address: ''
    });
  }

}
