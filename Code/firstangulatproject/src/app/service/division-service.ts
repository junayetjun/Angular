import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private apiUrl ='http://localhost:3000/divisions';


  constructor(private http: HttpClient) { }


  getAll(): Observable<Division[]>{
    return this.http.get<Division[]>(this.apiUrl);
  }

  add(division: Division): Observable<Division>{
    return this.http.post<Division>(this.apiUrl, division);
  }

  update(division: Division): Observable<Division>{
    return this.http.put<Division>(`${this.apiUrl}/${division.id}`, division);
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
