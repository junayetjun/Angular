import { Component } from '@angular/core';
import { ParentService } from '../../service/parent.service';

@Component({
  selector: 'app-parent-registration',
  standalone: false,
  templateUrl: './parent-registration.html',
  styleUrl: './parent-registration.css'
})
export class ParentRegistration {

  // ✅ User fields
  user: any = {
    name: '',
    email: '',
    phone: '',
    password: '',    
    role: 'PARENT'
  };

  // ✅ Parent fields
  parent: any = {    
    contactPerson: '',    
    photo: ''
  };

  // ✅ Profile file
  photoFile: File | null = null;


  constructor(
    private parentService: ParentService
  ) { }

  onFileSelected(event: any) {
    this.photoFile = event.target.files[0];
  }

  registerParent() {
    if (!this.photoFile) {
      alert("Please select a photo before submitting");
      return;
    }

    this.parentService.registerParent(this.user, this.parent, this.photoFile)
      .subscribe({
        next: (res) => {
          alert("Parent registered successfully ✅");
          console.log(res);
        },
        error: (err) => {
          alert("Registration failed ❌");
          console.error(err);
        }
      });
  }
}
