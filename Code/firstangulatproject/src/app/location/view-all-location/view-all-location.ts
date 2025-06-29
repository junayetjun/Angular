import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';
import e from 'express';

@Component({
  selector: 'app-view-all-location',
  standalone: false,
  templateUrl: './view-all-location.html',
  styleUrl: './view-all-location.css'
})
export class ViewAllLocation implements OnInit {

  locations : any;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private cdr: ChangeDetectorRef

  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  loadLocation(): void{
    this.locations = this.locationService.getAllLocation();
  }

  deleteLocation(id: string): void{
    this.locationService.deleteLocation(id).subscribe({

      next: () => {
        console.log('Student deleted');
        this.loadLocation();
        this.cdr.reattach();
      },
      error: (err) =>{
        console.log(err);
      }

    });


  }


  getLocationById(id: string): void{

    this.locationService.getLocationById(id).subscribe({

      next: (res) => {
        console.log(res);
        console.log("Data get Successfully");
        this.router.navigate(['/updatelocation', id]);

      },
      error: (err) => {
        console.log(err);
      }


    });

  }

  


}
