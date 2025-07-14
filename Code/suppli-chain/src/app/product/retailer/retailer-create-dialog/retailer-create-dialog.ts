import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-create-dialog',
  standalone: false,
  templateUrl: './retailer-create-dialog.html',
  styleUrl: './retailer-create-dialog.css'
})
export class RetailerCreateDialog implements OnInit{

  retailers: any;

  constructor(
    private retailerService: RetailerService,
    private router: Router,
    private cdr: ChangeDetectorRef 
  ){}



  ngOnInit(): void {
    
  }


  
  



}
