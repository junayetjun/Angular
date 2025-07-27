import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockTransfer } from '../model/stock-transfer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockTransferService {

 private apiUrl = 'http://localhost:3000/stockTransfers'; // JSON server endpoint

  constructor(private http: HttpClient) {}

  getAll(): Observable<StockTransfer[]> {
    return this.http.get<StockTransfer[]>(this.apiUrl);
  }

  create(transfer: StockTransfer): Observable<StockTransfer> {
    return this.http.post<StockTransfer>(this.apiUrl, transfer);
  }
}
