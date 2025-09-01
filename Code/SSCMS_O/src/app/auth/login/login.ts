import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;
  message: string = '';
  isLoading = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialize the login form with email and password fields
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email validation
      password: ['', Validators.required]  // Password validation
    });
  }

  // Function to handle login
  onLogin(): void {
    if (this.loginForm.invalid) {
      this.message = 'Please fill in all required fields.';
      return;
    }

    const { email, password } = this.loginForm.value;
    this.isLoading = true;  // Set loading to true

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.isLoading = false;  // Reset loading state
        this.router.navigate(['/caregiverprofile']);  // Navigate to profile page upon successful login
      },
      error: (error) => {
        this.isLoading = false;  // Reset loading state
        this.message = 'Invalid credentials or login failed. Please try again.';  // Show error message
        console.error(error);
      }
    });
  }

  //  onSubmit(): void {
  //   if (this.loginForm.invalid) {
  //     this.errorMessage = 'Please fill in all required fields correctly.';
  //     return;
  //   }

  //   const userDetails = this.loginForm.value;

  //   this.authService.login(userDetails).subscribe({
  //     next: (res) => {
  //       console.log('User logged in Successfully:', res);

  //       this.authService.storeToken(res.token);

  //       const role = this.authService.getUserRole();
  //       console.log('User role:', role);

  //       if (role === 'admin') {
  //         this.router.navigate(['/adminprofile']);
  //       }
  //       else if (role === 'user') {
  //         this.router.navigate(['/userprofile']);
  //       }
  //       else if (role === 'viewer') {
  //         this.router.navigate(['/userprofile']);
  //       }
  //       else {
  //         this.errorMessage = 'Unknown user role.';
  //       }
  //       this.loginForm.reset();
  //     },
  //     error: (err) => {
  //       console.error('Error leogging in: ', err);
  //       this.errorMessage = 'Invalid emair or password';
  //     }
  //   });



  // }

}
