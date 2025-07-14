import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retailer } from './model/retailer.model';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  

  private apiUrl ='http://localhost:3000/retailer';


  constructor(private http: HttpClient){}


  
  getAllRetailers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  saveRetailer(retailer: Retailer): Observable<any> {
    return this.http.post(this.apiUrl,  retailer);
  }

  deleteRetailerById(id: string): Observable<any> {
    return this.http.delete(this.apiUrl+'/'+ id);
  }


  getRetailerById(id: string): Observable<any> {
    return this.http.get(this.apiUrl+'/'+id);
  }


  updateRetailer(id: string, retailer: Retailer): Observable<any> {
    return this.http.put(this.apiUrl+'/'+id, retailer);
  }


}
