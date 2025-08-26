import { Injectable } from '@angular/core';
import { environment } from '../../environments/envirronment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private baseUrl = environment.apiBaseUrl + '/category/';


  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}${id}`);
  }

  create(country: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, country);
  }

  update(id: number, country: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}${id}`, country);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
