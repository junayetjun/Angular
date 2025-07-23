import { Component, OnInit } from '@angular/core';
import { UsermodelModule } from './model/usermodel-module';
import { AuthService } from './service/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'b-gurdian';

  userRole: string | null ='';
  currentUser: UsermodelModule | null = null;


  constructor(
    private authService: AuthService
  ){}


  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user =>{
      this.currentUser =user;
      this.userRole = user?.role || null;
    });
  }





}
