import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/envirronment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';
import { Caregiver } from '../model/caregiver.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CaregiverService {

  private baseUrl = environment.apiBaseUrl + '/caregiver/';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  // Register caregiver with user, caregiver JSON, and photo file
  registerCaregiver(user: any, caregiver: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('caregiver', JSON.stringify(caregiver));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl, formData);
  }

  // Get logged-in caregiver profile with auth token header
  getProfile(): Observable<Caregiver> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get<Caregiver>(`${this.baseUrl}profile`, { headers });
  }

  // Get caregivers filtered by category
  getCaregiversByCategory(category: string): Observable<Caregiver[]> {
    return this.http.get<Caregiver[]>(`${this.baseUrl}category/${category}`);
  }

  // Get all caregivers
  getAllCaregivers(): Observable<Caregiver[]> {
    return this.http.get<Caregiver[]>(`${this.baseUrl}all`);
  }
  // Update caregiver profile
  updateProfile(caregiver: Caregiver): Observable<Caregiver> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.put<Caregiver>(`${this.baseUrl}profile`, caregiver, { headers });
  }
  
}
