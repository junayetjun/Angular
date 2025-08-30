import { Component } from '@angular/core';
import { ParentService } from '../../service/parent.service';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilecomponent',
  standalone: false,
  templateUrl: './profilecomponent.html',
  styleUrl: './profilecomponent.css'
})
export class Profilecomponent {
  profile: any;
  loading: boolean = true;
  message: string = '';

  constructor(
    private parentService: ParentService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
  const token = this.authService.getToken();
  console.log('Token:', token);

  if (!token || this.authService.isTokenExpired(token)) {
    this.authService.logout();
    this.router.navigate(['/login']);
    return;
  }

  this.parentService.getProfile().subscribe({
    next: (data) => {
      if (!data) {
        this.message = 'No profile data found.';
      } else {
        this.profile = data;
      }
      this.loading = false;
    },
    error: (err) => {
      this.message = 'Failed to load profile. Please try again later.';
      this.loading = false;
      console.error(err);
    }
  });
}



  logout(): void {
    this.authService.logout(); // Clears the token and logs the user out
    this.router.navigate(['/login']);
  }
}
