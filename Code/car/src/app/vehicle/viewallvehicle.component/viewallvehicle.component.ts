import { Component } from '@angular/core';
import { VehicleModule } from '../../model/vehicle/vehicle-module';
import { AddpartsModule } from '../../model/addparts/addparts-module';
import { VehicleService } from '../../service/vehicle.service';
import { PartsService } from '../../service/parts.service';

@Component({
  selector: 'app-viewallvehicle.component',
  standalone: false,
  templateUrl: './viewallvehicle.component.html',
  styleUrl: './viewallvehicle.component.css'
})
export class ViewallvehicleComponent {

  vehicle: VehicleModule[] = [];
  addParts: AddpartsModule[] = [];


  constructor(
    private vehicleService: VehicleService,
    private partService: PartsService
  ) { }


  ngOnInit() {
    this.loadAllData();
  }


  loadAllData() {
    this.partService.getAll().subscribe(ps => {
      this.addParts = ps;
      this.vehicleService.getAll().subscribe(vehicle => {
        this.vehicle = vehicle;
      });
    });
  }

  getPartsName(ids: string[]): string {

    const names = this.addParts
      .filter(ps => ids.includes(ps.id!))
      .map(ps => ps.partsName);
    return names.join(', ');
  }


  deleteVehicle(id: string) {
    if (confirm('Are you sure?')) {
      this.vehicleService.delete(id).subscribe(() => {
        alert('Vehicle deleted!');
        this.loadAllData();
      });
    }
  }



}
