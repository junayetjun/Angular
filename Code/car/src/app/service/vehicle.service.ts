import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModule } from '../model/vehicle/vehicle-module';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 
  private apiUrl ='http://localhost:3000/vehicle';

  constructor(private http: HttpClient){}


  getAll(): Observable<VehicleModule[]>{
    return this.http.get<VehicleModule[]>(this.apiUrl); 
  }

  add(vehicle: VehicleModule): Observable<VehicleModule>{
    return this.http.post<VehicleModule>(this.apiUrl, vehicle);
  }

  update(vehicle: VehicleModule): Observable<VehicleModule>{
    return this.http.put<VehicleModule>(`${this.apiUrl}/${vehicle.id}`, vehicle);
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
