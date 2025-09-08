import { ChangeDetectorRef, Component } from '@angular/core';
import { ParentService } from '../../service/parent.service';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profilecomponent',
  standalone: false,
  templateUrl: './profilecomponent.html',
  styleUrl: './profilecomponent.css'
})
export class Profilecomponent {


  parent: any;


  constructor(
    private parentService: ParentService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private authService: AuthService

  ) {
  }

  ngOnInit(): void {
    this.getProfile();

  }

  getProfile() {

    this.parentService.getProfile().subscribe({
      next: (data) => {
        this.parent = data;
        console.log(data);
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load profile', err);
      }
    });
  }


  onLogout(): void {
    this.authService.logout();
  }

}
