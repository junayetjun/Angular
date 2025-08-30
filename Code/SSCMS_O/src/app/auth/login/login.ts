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
        this.router.navigate(['/parentprofile']);  // Navigate to profile page upon successful login
      },
      error: (error) => {
        this.isLoading = false;  // Reset loading state
        this.message = 'Invalid credentials or login failed. Please try again.';  // Show error message
        console.error(error);
      }
    });
  }

}
