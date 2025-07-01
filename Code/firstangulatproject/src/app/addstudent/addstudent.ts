import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { Student } from '../model/students.mode';
import { error } from 'console';
import { LocationService } from '../service/location.service';
import { Location } from '../model/location.model';

@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css'
})
export class Addstudent implements OnInit {

  locations: Location[] = [];

  formGroup !: FormGroup;

  constructor(
    private studentService : StudentService,
    private fromBuilder : FormBuilder,
    private router : Router,
    private locationService: LocationService,
    private cdr: ChangeDetectorRef

  ){ }


  ngOnInit(): void {
    
    this.formGroup = this.fromBuilder.group({

      name : [''],
      email : [''],
      fee : [''],
      location: this.fromBuilder.group({

        name: [''],
        photo: ['']
      })

    });

    this.loadLocation();

    this.formGroup.get('location')?.valueChanges.subscribe(name => {
      const selectedLocation = this.locations.find(loc => loc.name === name);
      if(selectedLocation){
        this.formGroup.patchValue({location: selectedLocation});

      }
    });
    
  }

  loadLocation(): void {
    this.locationService.getAllLocation().subscribe({
      next: (loc) => {

        this.locations =loc;
      },
      error: (err) => {
        console.log(err);
      }
      

    });


  }



  addStudent(): void{

    const student: Student = {...this.formGroup.value};

    this.studentService.saveStudent(student).subscribe({

      next: (res) => {

        console.log("Student Saved", res)
        this.formGroup.reset();
        this.router.navigate(['/allstu']);

      },

      error: (error) => {
        console.log(error);
      }


    });

  }

}
