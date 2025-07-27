import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WarehouseStock } from '../model/warehouse-stock.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseStockService {


  private apiUrl = 'http://localhost:3000/warehouseStocks';

  constructor(private http: HttpClient) { }

  getAll(): Observable<WarehouseStock[]> {
    return this.http.get<WarehouseStock[]>(this.apiUrl);
  }

  create(stock: WarehouseStock): Observable<WarehouseStock> {
    return this.http.post<WarehouseStock>(this.apiUrl, stock);
  }

  update(stock: WarehouseStock): Observable<WarehouseStock> {
    return this.http.put<WarehouseStock>(`${this.apiUrl}/${stock.id}`, stock);
  }

  getByWarehouseAndMaterial(warehouseId: string, materialId: string): Observable<WarehouseStock | null> {
    const url = `${this.apiUrl}?warehouseId=${warehouseId}&materialId=${materialId}`;
    return this.http.get<WarehouseStock[]>(url).pipe(
      map(stocks => stocks.length > 0 ? stocks[0] : null)
    );
  }

}
