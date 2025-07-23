import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (this.authService.isAuthenticated() && (this.authService.isAdmin() || this.authService.isUser())) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }



};
