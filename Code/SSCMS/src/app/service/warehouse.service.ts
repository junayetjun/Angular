import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Warehouse } from '../model/warehouse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

   private apiUrl = 'http://localhost:3000/warehouses';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.apiUrl);
  }

  create(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(this.apiUrl, warehouse);
  }

  update(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>(`${this.apiUrl}/${warehouse.id}`, warehouse);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
