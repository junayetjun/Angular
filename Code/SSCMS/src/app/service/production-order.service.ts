import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductionOrder } from '../model/production-order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionOrderService {

  private apiUrl = 'http://localhost:3000/productionOrders';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductionOrder[]> {
    return this.http.get<ProductionOrder[]>(this.apiUrl);
  }

  create(order: ProductionOrder): Observable<ProductionOrder> {
    return this.http.post<ProductionOrder>(this.apiUrl, order);
  }

  update(order: ProductionOrder): Observable<ProductionOrder> {
    return this.http.put<ProductionOrder>(`${this.apiUrl}/${order.id}`, order);
  }


  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
