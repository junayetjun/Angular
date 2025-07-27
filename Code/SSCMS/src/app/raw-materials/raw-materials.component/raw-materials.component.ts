import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RawMaterial } from '../../model/raw-material';
import { RawMaterialService } from '../../service/raw-material.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-raw-materials.component',
  standalone: false,
  templateUrl: './raw-materials.component.html',
  styleUrl: './raw-materials.component.css'
})
export class RawMaterialsComponent implements OnInit {

 materials: RawMaterial[] = [];
  materialForm!: FormGroup;
  isEditMode = false;
  editId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private rawMaterialService: RawMaterialService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadMaterials();
  }

  initForm(): void {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      quantity: [0, [Validators.required, Validators.min(0)]],
      unit: ['pcs', Validators.required],
      threshold: [10, [Validators.required, Validators.min(0)]]
    });
  }

  loadMaterials(): void {
    this.rawMaterialService.getAll().subscribe(data => {
      this.materials = data;
    });
  }

  submitForm(): void {
    if (this.materialForm.invalid) return;

    const material: RawMaterial = this.materialForm.value;

    if (this.isEditMode && this.editId) {
      material.id = this.editId;
      this.rawMaterialService.update(material).subscribe(() => {
        this.loadMaterials();
        this.cancelEdit();
      });
    } else {
      this.rawMaterialService.create(material).subscribe(() => {
        this.loadMaterials();
        this.resetForm();
      });
    }
  }

  editMaterial(material: RawMaterial): void {
    this.materialForm.patchValue(material);
    this.isEditMode = true;
    this.editId = material.id!;
  }

  deleteMaterial(id: string): void {
    if (confirm('Delete this material?')) {
      this.rawMaterialService.delete(id).subscribe(() => {
        this.loadMaterials();
      });
    }
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.editId = null;
    this.resetForm();
  }

  resetForm(): void {
    this.materialForm.reset({
      name: '',
      description: '',
      quantity: 0,
      unit: 'pcs',
      threshold: 10
    });
  }

  isLowStock(material: RawMaterial): boolean {
    return material.quantity < material.threshold;
  }
}
