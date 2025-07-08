import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoliceStation } from '../model/policeStation';

@Injectable({
  providedIn: 'root'
})
export class PolicestationService {

  private apiUrl= 'http://localhost:3000/policeStation';

  constructor(private http: HttpClient) { }


  getAll(): Observable<PoliceStation[]>{
    return this.http.get<PoliceStation[]>(this.apiUrl);
  }

  add(policeStation: PoliceStation): Observable<PoliceStation>{
    return this.http.post<PoliceStation>(this.apiUrl, policeStation); 
  }

  update(policeStation: PoliceStation): Observable<PoliceStation>{
    return this.http.put<PoliceStation>(`${this.apiUrl}/${policeStation.id}`, policeStation);
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
