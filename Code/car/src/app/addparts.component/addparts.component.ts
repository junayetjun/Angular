import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AddpartsModule } from '../model/addparts/addparts-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartsService } from '../service/parts.service';

@Component({
  selector: 'app-addparts.component',
  standalone: false,
  templateUrl: './addparts.component.html',
  styleUrl: './addparts.component.css'
})
export class AddpartsComponent implements OnInit {

  addParts: AddpartsModule[] = [];
  formGroup: FormGroup;
  editing: boolean = false;


  constructor(
    private fb: FormBuilder,
    private partService: PartsService,
    private cdr: ChangeDetectorRef
  ) {
    this.formGroup = this.fb.group({
      id: [''],
      companyName: ['', Validators.required],
      partsName: ['', Validators.required],
      price: ['', Validators.required]

    });
  }


  ngOnInit(): void {

    this.loadAllParts();
  }

  loadAllParts() {
    this.partService.getAll().subscribe(data => {
      this.addParts = data;
    });
  }


  onSubmit() {
    if (this.formGroup.invalid) return;

    if (this.editing) {
      this.partService.update(this.formGroup.value).subscribe(() => {
        alert('Updated Successfully');
        this.loadAllParts();
        this.cancelEdit();
        this.cdr.markForCheck();
      });
    } else {
      const { companyName, partsName, price } = this.formGroup.value;
      this.partService.add({ companyName, partsName, price }).subscribe(() => {
        alert('Added successfully!');
        this.loadAllParts();
        this.formGroup.reset();
        this.editing = false;
      });
    }

  }

  editParts(addParts: AddpartsModule) {
    this.editing = true;
    this.formGroup.patchValue({
      id: addParts.id,
      companyName: addParts.companyName,
      partsName: addParts.partsName,
      price: addParts.price
    });
    this.cdr.markForCheck();
  }


  deleteParts(id: string) {
    if (confirm('Are you sure?')) {
      this.partService.delete(id).subscribe(() => {
        alert('Deleted');
        this.loadAllParts();
        this.cdr.markForCheck();
      })
    }
  }

  cancelEdit() {
    this.editing = false;
    this.formGroup.reset();
  }


}
