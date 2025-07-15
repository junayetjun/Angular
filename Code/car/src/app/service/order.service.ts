import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { AddorderModule } from '../model/addorder/addorder-module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/order';


  constructor(private http: HttpClient) { }

  getAllOrder(): Observable<AddorderModule[]> {
    return this.http.get<AddorderModule[]>(this.apiUrl);
  }

  add(addOrder: AddorderModule): Observable<AddorderModule> {
    return this.http.post<AddorderModule>(this.apiUrl, addOrder);
  }

  update(addOrder: AddorderModule): Observable<AddorderModule> {
    return this.http.put<AddorderModule>(`${this.apiUrl}/${addOrder.id}`, addOrder);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getById(id: string): Observable<AddorderModule> {
    return this.http.get<AddorderModule>(`${this.apiUrl}/${id}`);
  }


}
