import { Component } from '@angular/core';
import { WarehouseModelModule } from '../warehouse.model/warehouse.model-module';

@Component({
  selector: 'app-warehouse.component',
  standalone: false,
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css'
})
export class WarehouseComponent {


  warehouse: WarehouseModelModule = new WarehouseModelModule();
  warehouses: WarehouseModelModule[] = [];




}
