import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddpartsModule } from '../model/addparts/addparts-module';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  

  private apiUrl ='http://localhost:3000/parts';

  constructor(private http: HttpClient){}


  getAll():Observable<AddpartsModule[]>{
    return this.http.get<AddpartsModule[]>(this.apiUrl);
  }

  add(addParts: AddpartsModule): Observable<AddpartsModule>{
    return this.http.post<AddpartsModule>(this.apiUrl,addParts);
  }

  update(addParts: AddpartsModule): Observable<AddpartsModule>{
    return this.http.put<AddpartsModule>(`${this.apiUrl}/${addParts.id}`, addParts);
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
