import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from '../model/delivery.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private apiUrl = 'http://localhost:3000/deliveries'; // adjust to your backend

  constructor(private http: HttpClient) { }
  

  getAll(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.apiUrl);
  }

  getById(id: string): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.apiUrl}/${id}`);
  }

  create(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.apiUrl, delivery);
  }

  update(delivery: Delivery): Observable<Delivery> {
    return this.http.put<Delivery>(`${this.apiUrl}/${delivery.id}`, delivery);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
