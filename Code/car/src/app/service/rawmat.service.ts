import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawmatModule } from '../rawmat/rawmat/rawmat-module';


@Injectable({
  providedIn: 'root'
})
export class RawmatService {
  private apiUrl = 'http://localhost:3000/rawmats'; // আপনার API এন্ডপয়েন্ট URL

  constructor(private http: HttpClient) { }

  getAll(): Observable<RawmatModule[]> {
    return this.http.get<RawmatModule[]>(this.apiUrl);
  }

  save(rawmat: RawmatModule): Observable<RawmatModule> {
    return this.http.post<RawmatModule>(this.apiUrl, rawmat);
  }

  saveOrUpdate(rawmat: RawmatModule): Observable<RawmatModule> {
    return this.http.post<RawmatModule>(`${this.apiUrl}/saveOrUpdate`, rawmat);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(id: string, rawmat: RawmatModule): Observable<RawmatModule> {
    return this.http.put<RawmatModule>(`${this.apiUrl}/${id}`, rawmat);
  }

  getById(id: string): Observable<RawmatModule> {
    return this.http.get<RawmatModule>(`${this.apiUrl}/${id}`);
  }
}