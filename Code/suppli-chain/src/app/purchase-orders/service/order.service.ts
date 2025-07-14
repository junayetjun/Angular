import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../models/order.model/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private api = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(this.api);
  }
  getOrder(id: string): Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>(`${this.api}/${id}`);
  }
  createOrder(o: PurchaseOrder): Observable<PurchaseOrder> {
    return this.http.post<PurchaseOrder>(this.api, o);
  }
  updateOrder(o: PurchaseOrder): Observable<PurchaseOrder> {
    return this.http.put<PurchaseOrder>(`${this.api}/${o.id}`, o);
  }
  deleteOrder(id: string): Observable<PurchaseOrder> {
    return this.http.delete<PurchaseOrder>(`${this.api}/${id}`);
  }
}
