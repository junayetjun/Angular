import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/envirronment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service';
import { catchError, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private baseUrl = environment.apiBaseUrl + '/parent/';


  constructor(
    private http: HttpClient, 
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  // 1️⃣ Register Employer with User + Employer JSON + Photo
  registerParent(user: any, parent: any, photo: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('parent', JSON.stringify(parent));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl, formData);
  }

  // 2️⃣ Get All Parents
  getAllParents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'all');
  }

 getProfile(): Observable<any> {
  let headers = new HttpHeaders();

  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('authToken');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
  }

  return this.http.get<any>(this.baseUrl + 'profile', { headers }).pipe(
    catchError((error) => {
      console.error('Error fetching profile:', error);  // Log the error for debugging
      throw error;
    })
  );
}



}
