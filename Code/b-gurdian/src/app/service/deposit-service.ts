import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepositModel } from '../model/deposittest';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private apiUrl = 'http://localhost:3000/deposits'; // JSON Server resource

  constructor(private http: HttpClient) {}

  saveDeposit(model: DepositModel): Observable<DepositModel> {
    return this.http.post<DepositModel>(this.apiUrl, model);
  }

  getAll(): Observable<DepositModel[]> {
    return this.http.get<DepositModel[]>(this.apiUrl);
  }
}
