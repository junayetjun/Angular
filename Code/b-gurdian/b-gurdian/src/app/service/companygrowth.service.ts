import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyGrowth } from '../model/companygrowth.model';

@Injectable({
  providedIn: 'root'
})
export class CompanygrowthService {
  private baseUrl = 'http://localhost:3000/companygrowth';

  constructor(
    private http: HttpClient
  ) { }


  saveCompanyGrowth(model: CompanyGrowth): Observable<CompanyGrowth> {
    return this.http.post<CompanyGrowth>(this.baseUrl, model);
  }


  getAllData(): Observable<CompanyGrowth[]> {
    return this.http.get<CompanyGrowth[]>(this.baseUrl);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/" + id);
  }

  deleteCompanyGroth(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateCompanyGrowth(id: string, data: CompanyGrowth): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}`, data);
}

}
