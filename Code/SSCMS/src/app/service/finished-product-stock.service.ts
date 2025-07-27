import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinishedProductStock } from '../model/finished-product-stock.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinishedProductStockService {


  private apiUrl = 'http://localhost:3000/finishedProductStocks';

  constructor(private http: HttpClient) { }

  getAll(): Observable<FinishedProductStock[]> {
    return this.http.get<FinishedProductStock[]>(this.apiUrl);
  }

  create(stock: FinishedProductStock): Observable<FinishedProductStock> {
    return this.http.post<FinishedProductStock>(this.apiUrl, stock);
  }

  update(stock: FinishedProductStock): Observable<FinishedProductStock> {
    return this.http.put<FinishedProductStock>(`${this.apiUrl}/${stock.id}`, stock);
  }

  getByWarehouseAndProduct(warehouseId: string, productId: string): Observable<FinishedProductStock | null> {
    const url = `${this.apiUrl}?warehouseId=${warehouseId}&productId=${productId}`;
    return this.http.get<FinishedProductStock[]>(url).pipe(
      map(results => results.length > 0 ? results[0] : null)
    );
  }
}
