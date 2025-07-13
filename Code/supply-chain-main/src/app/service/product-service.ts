import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private apiUrl = 'http://localhost:3000/product';


  constructor(
    private http: HttpClient
  ) { }



  getAllproduct(): Observable<any>{

    return this.http.get(this.apiUrl);

  }

  saveProduct(productModel: ProductModel): Observable<any>{
    return this.http.post(this.apiUrl, productModel)

  }


  deleteProduct(id : string): Observable<any>{

    return this.http.delete(this.apiUrl + "/"+id);

  }


  getProductById(id: string): Observable<any>{

    return this.http.get(this.apiUrl+'/'+ id);

  }


  updateProduct(id: string, productModel: ProductModel): Observable<any>{

    return this.http.put(this.apiUrl+'/'+id, productModel);
  }

}
