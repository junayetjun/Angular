import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanygrowthService {
  baseUrl: string = "http://localhost:3000/companygrowth";

  constructor(
    private http: HttpClient
  ) { }

  public getAllData(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  public getById(id: string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+id);
  }
}
