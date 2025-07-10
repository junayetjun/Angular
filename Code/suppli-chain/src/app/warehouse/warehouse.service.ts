import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../service/apiresponse';
import { WarehouseModelModule } from './warehouse.model/warehouse.model-module';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {



  private apiUrl = 'http://localhost:3000/warehouse';

  constructor(private http: HttpClient) { }

  getAllWarehouses(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/list`);
  }

  saveWarehouse(warehouse: WarehouseModelModule): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/save`, warehouse);
  }

  updateWarehouse(warehouse: WarehouseModelModule): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/update`, warehouse);
  }

  deleteWarehouseById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/delete/${id}`);
  }

  findWarehouseById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }



}
