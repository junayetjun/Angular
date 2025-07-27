import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RawMaterial } from '../model/raw-material';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {
  private apiUrl = 'http://localhost:3000/raw-materials';

  constructor(private http: HttpClient) { }

  getAll(): Observable<RawMaterial[]> {
    return this.http.get<RawMaterial[]>(this.apiUrl);
  }

  getById(id: string): Observable<RawMaterial> {
    return this.http.get<RawMaterial>(`${this.apiUrl}/${id}`);
  }

  create(material: RawMaterial): Observable<RawMaterial> {
    return this.http.post<RawMaterial>(this.apiUrl, material);
  }

  update(material: RawMaterial): Observable<RawMaterial> {
    return this.http.put<RawMaterial>(`${this.apiUrl}/${material.id}`, material);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
