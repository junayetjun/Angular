import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  AddProductModel } from '../model/addproduct';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {


  private apiUrl = 'http://localhost:3000/product';


  constructor(private http: HttpClient) { }

  getAll(): Observable<AddProductModel[]> {
    return this.http.get<AddProductModel[]>(this.apiUrl);
  }

  add(addProduct: AddProductModel): Observable<AddProductModel> {
    return this.http.post<AddProductModel>(this.apiUrl, addProduct);
  }

  update(addProduct: AddProductModel): Observable<AddProductModel> {
    return this.http.put<AddProductModel>(`${this.apiUrl}/${addProduct.id}`, addProduct);
  }

  delete(id: string ): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
