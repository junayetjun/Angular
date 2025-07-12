import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from '../model/ordermodel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/order';

  constructor(
    private http: HttpClient
  ) { }



  getAllOrder(): Observable<any>{

    return this.http.get(this.apiUrl);

  }

  saveOrder(orderModel: OrderModel): Observable<any>{
    return this.http.post(this.apiUrl, orderModel)

  }


  deleteOrder(id : string): Observable<any>{

    return this.http.delete(this.apiUrl + "/"+id);

  }


  getOrderById(id: string): Observable<any>{

    return this.http.get(this.apiUrl+'/'+ id);

  }


  updateOrder(id: string, orderModel: OrderModel): Observable<any>{

    return this.http.put(this.apiUrl+'/'+id, orderModel);
  }




  // getAllOrder(): Observable<OrderModel[]> {
  //   return this.http.get<OrderModel[]>(this.apiUrl);
  // }

  // addOrder(orderModel: OrderModel): Observable<OrderModel> {
  //   return this.http.post<OrderModel>(this.apiUrl, orderModel);
  // }

  // updateOrder(orderModel: OrderModel): Observable<OrderModel> {
  //   return this.http.put<OrderModel>(`${this.apiUrl}/${orderModel.id}`, orderModel);
  // }

  // deleteOrder(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }




}
