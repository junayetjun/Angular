import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsermodelModule } from '../../model/usermodel-module';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-userprofile',
  standalone: false,
  templateUrl: './userprofile.html',
  styleUrls: ['./userprofile.css']  // fixed typo here
})
export class Userprofile implements OnInit, OnDestroy {

  user: UsermodelModule | null = null;
  private subscription: Subscription = new Subscription();
  message: string = '';
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const sub = this.userService.getUserProfile().subscribe({
      next: (res) => {
        console.log('User profile loaded:', res);
        if (res) {
          this.user = res;
        }
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      }
    });
    this.subscription.add(sub);
  }

  updateUserProfile(): void {
    
    if (!this.user) {
      return;
    }
    const sub = this.userService.updateUserProfile(this.user).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.message = 'Profile updated successfully!';
      },
      error: (err) => {
        console.error('Error updating profile:', err);
        this.message = 'Failed to update profile.';
      }
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
