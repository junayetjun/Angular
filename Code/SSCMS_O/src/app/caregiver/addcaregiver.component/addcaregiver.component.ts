import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaregiverService } from '../../service/caregiver.service';


@Component({
  selector: 'app-addcaregiver.component',
  standalone: false,
  templateUrl: './addcaregiver.component.html',
  styleUrl: './addcaregiver.component.css'
})
export class AddcaregiverComponent {
  userForm: FormGroup;
  caregiverForm: FormGroup;
  photoFile!: File;
  message: string = '';

  constructor(private fb: FormBuilder,
    private caregiverService: CaregiverService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.caregiverForm = this.fb.group({
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  onPhotoSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.photoFile = event.target.files[0];
      console.log('Selected file:', this.photoFile);
    }
  }

  onSubmit(): void {
    if (!this.photoFile) {
      this.message = 'Please upload a photo.';
      return;
    }
    if (this.userForm.invalid || this.caregiverForm.invalid) {
      this.message = 'Please fill out all required fields.';
      return;
    }

    const user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      password: this.userForm.value.password,
      role: 'CAREGIVER' // adjust if necessary
    };

    const caregiver = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      gender: this.caregiverForm.value.gender,
      address: this.caregiverForm.value.address,
      dateOfBirth: this.caregiverForm.value.dateOfBirth
    };

    this.caregiverService.registerCaregiver(user, caregiver, this.photoFile).subscribe({
      next: res => {
        this.message = res.Message || 'Registration successful!';
        this.userForm.reset();
        this.caregiverForm.reset();
        this.photoFile = undefined!;
      },
      error: err => {
        this.message = 'Registration failed: ' + (err.error?.Message || err.message);
      }
    });
  }

}
