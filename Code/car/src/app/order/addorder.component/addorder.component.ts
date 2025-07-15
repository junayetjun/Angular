import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleModule } from '../../model/vehicle/vehicle-module';
import { AddpartsModule } from '../../model/addparts/addparts-module';
import { OrderService } from '../../service/order.service';
import { VehicleService } from '../../service/vehicle.service';
import { PartsService } from '../../service/parts.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Order {
  id?: string;
  name: string;
  contactNumber: string;
  vehicle: string;
  addParts: string;
}

@Component({
  selector: 'app-addorder.component',
  standalone: false,
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.css'
})
export class AddorderComponent {
  formGroup: FormGroup;
  editing: boolean = false;
  orderId: string | null = null;

  allvehicles: VehicleModule[] = [];
  allParts: AddpartsModule[] = [];
  filteredVehicle: VehicleModule[] = []; // Rename and keep if needed
  filteredAddParts: AddpartsModule[] = []; // Rename

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private vehicleService: VehicleService,
    private partService: PartsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      vehicle: ['', Validators.required],
      addParts: ['', Validators.required]
    });
  }

  ngOnInit() {
  this.vehicleService.getAll().subscribe({
    next: data => {
      console.log('Vehicles:', data);
      this.allvehicles = data;
    },
    error: err => console.error('Failed to load vehicles:', err)
  });
  this.partService.getAll().subscribe({
    next: data => {
      console.log('Parts:', data);
      this.allParts = data;
    },
    error: err => console.error('Failed to load parts:', err)
  });

  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (id) {
      this.editing = true;
      this.orderId = id;
      this.loadOrder(this.orderId);
    }
  });
}

  onVehicleChange() {
    const selectedVehicleId = this.formGroup.value.vehicle;
    const selectedVehicle = this.allvehicles.find(v => v.id === selectedVehicleId);
    if (selectedVehicle) {
      this.filteredAddParts = this.allParts.filter(ps => ps.id && selectedVehicle.addParts.includes(ps.id));
      this.formGroup.patchValue({ addParts: '' });
    } else {
      this.filteredAddParts = [];
    }
  }

  onSubmit() {
    if (this.formGroup.invalid) return;

    const order: any = { ...this.formGroup.value };

    if (this.editing) {
      order.id = this.orderId;
      this.orderService.update(order).subscribe({
        next: () => {
          alert('Order Updated Successfully!');
          this.router.navigate(['/vieworder']);
        },
        error: err => console.error('Failed to update order', err)
      });
    } else {
      this.orderService.add(order).subscribe({
        next: () => {
          alert('Order added successfully!');
          this.formGroup.reset();
          this.formGroup.markAsPristine();
          this.formGroup.markAsUntouched();
          this.filteredAddParts = [];
        },
        error: err => console.error('Failed to add order', err)
      });
    }
  }

  loadOrder(id: string) {
  this.orderService.getById(id).subscribe({
    next: order => {
      this.formGroup.patchValue(order);
      this.onVehicleChange();
    },
    error: err => console.error('Failed to load order:', err)
  });
}
}