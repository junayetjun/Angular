import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartsService } from '../../service/parts.service';
import { VehicleService } from '../../service/vehicle.service';
import { AddpartsModule } from '../../model/addparts/addparts-module';
import { VehicleModule } from '../../model/vehicle/vehicle-module';

@Component({
  selector: 'app-addvehicle.component',
  standalone: false,
  templateUrl: './addvehicle.component.html',
  styleUrl: './addvehicle.component.css'
})
export class AddvehicleComponent {

  formGroup: FormGroup;
  addParts: AddpartsModule[] = [];

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private partService: PartsService
  ) {
    this.formGroup = this.fb.group({
      vehicleName: ['', Validators.required],
      addParts: [[], Validators.required]

    });
  }


  ngOnInit() {
    this.loadAllParts();
  }

  loadAllParts() {
    this.partService.getAll().subscribe(data => {
      this.addParts = data;
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) return;

    const vehicle: VehicleModule = this.formGroup.value;

    this.vehicleService.add(vehicle).subscribe(() => {
      alert('Vehicle added successfully!');
      this.formGroup.reset();
    })



  }


}
