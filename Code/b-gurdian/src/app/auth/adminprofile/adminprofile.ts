import { Component } from '@angular/core';
import { UsermodelModule } from '../../model/usermodel-module';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-adminprofile',
  standalone: false,
  templateUrl: './adminprofile.html',
  styleUrl: './adminprofile.css'
})
export class Adminprofile {
  
   user: UsermodelModule | null = null;
  private subscription: Subscription = new Subscription();


  constructor(
     private authService: AuthService,
    private router: Router,
    private userSer: UserService
  ){}



}
