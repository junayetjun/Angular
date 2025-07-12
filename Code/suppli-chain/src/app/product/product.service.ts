import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../service/apiresponse';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = 'http://localhost:3000/product';


  constructor(private http: HttpClient) { }



  // getAllProducts(): Observable<any>{
  //   return this.http.get(this.apiUrl);

  // }

  // saveProduct(addProduct: Product): Observable<any>{
  //   return this.http.post(this.apiUrl,addProduct);

  // }

  // deleteProductById(id: string):Observable<any>{
  //   return this.http.delete(this.apiUrl+ "/"+ id);

  // }

  // getProductById(id: string): Observable<any>{
  //   return this.http.get(this.apiUrl+"/"+id);

  // }

  // updateLocation(id: string, addProduct: Product): Observable<any>{
  //   return this.http.put(this.apiUrl+"/"+id, addProduct);


  // }





  getAllProducts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}`);
  }



  saveProduct(product: Product, imageFile?: File): Observable<ApiResponse> {
    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));

    if (imageFile) {
      formData.append('imageFile', imageFile);
    }
    return this.http.post<ApiResponse>(`${this.apiUrl}`, formData);
  }



  updateProduct(product: Product, imageFile?: File): Observable<ApiResponse> {
    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify(product)], { type: 'application/json' }));

    if (imageFile) {
      formData.append('imageFile', imageFile);
    }
    return this.http.put<ApiResponse>(`${this.apiUrl}/update`, formData);
  }



  deleteProductById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/delete/${id}`);
  }



  getProductById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }



}
