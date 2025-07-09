import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SourceModel } from '../model/source-model';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private apiUrl = 'http://localhost:3000/source';

  constructor(private http: HttpClient) { }

 getAllSource(): Observable<any>{
    return this.http.get(this.apiUrl);

  }

  saveSource(source: SourceModel): Observable<any>{
    return this.http.post(this.apiUrl,source);

  }

  deleteSource(id: string):Observable<any>{
    return this.http.delete(this.apiUrl+ "/"+ id);

  }

  getSourceById(id: string): Observable<any>{
    return this.http.get(this.apiUrl+"/"+id);

  }

  updateSource(id: string, source: SourceModel): Observable<any>{
    return this.http.put(this.apiUrl+"/"+id, source);

  }
  


}
