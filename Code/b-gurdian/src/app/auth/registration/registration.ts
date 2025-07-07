import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { UsermodelModule } from '../../model/usermodel-module';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  regForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.regForm = this.formBuilder.group({
      
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      businessName: ['', Validators.required],
      password: ['', Validators.required],
      photo: ['', Validators.required],
      businessAddress: ['', Validators.required],
      


    })
  }



  onSubmit(): void {
    if (this.regForm.valid) {
      
      const user: UsermodelModule = {
        ...this.regForm.value,
        role: 'user'
       
      };

      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User Registration successfully: ', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error registrating user ', err);
        }
      });
    }
    else {
      alert('Complete Mendatory field');
    }


  }






}
