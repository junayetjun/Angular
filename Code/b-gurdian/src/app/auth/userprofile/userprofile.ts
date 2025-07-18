import { Component, OnInit } from '@angular/core';
import { UsermodelModule } from '../../model/usermodel-module';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service';
import { cpSync } from 'fs';

@Component({
  selector: 'app-userprofile',
  standalone: false,
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile implements OnInit {


  user: UsermodelModule | null = null;
  private subscription: Subscription = new Subscription();


  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) { }


  ngOnInit(): void {
    //this.loadUserProfile();
  }


  // loadUserProfile(): void {
  //   const sub = this.userService.getUserProfile().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       if (res) {
  //         this.user = res;
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  //   this.subscription.add(sub);
  // }


  // ngOnDistroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
