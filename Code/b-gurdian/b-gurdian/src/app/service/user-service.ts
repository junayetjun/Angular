import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { Observable, of } from 'rxjs';
import { UsermodelModule } from '../model/usermodel-module';
  // changed to UserModel for clarity

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getUserProfile(): Observable<UsermodelModule | null> {
    return of(this.authService.getUserProfileFromStorage());
  }

  updateUserProfile(user: UsermodelModule): Observable<UsermodelModule> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<UsermodelModule>(`${this.baseUrl}/${user.id}`, user);
  }
}
