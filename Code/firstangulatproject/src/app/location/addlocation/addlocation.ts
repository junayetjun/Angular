import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';
import { Location } from '../../model/location.model';

@Component({
  selector: 'app-addlocation',
  standalone: false,
  templateUrl: './addlocation.html',
  styleUrl: './addlocation.css'
})
export class Addlocation {



  fromGroup!: FormGroup;


  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

ngOnInit(): void{

  this.fromGroup = this.formBuilder.group({

    name: [''],
    photo: ['']


  });

}
  
addLocation(): void{

  const loc: Location ={...this.fromGroup.value};

  this.locationService.saveLocation(loc).subscribe({

    next: (res) => {

      console.log("Location Saved",res);
      this.fromGroup.reset();
      this.router.navigate(['/allloc']);

    },
    error: (err) => {

      console.log(err);
    }

  });


}


}
