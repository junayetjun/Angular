import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { LocationService } from '../service/location.service';
import { Student } from '../model/students.mode';
import { Location } from '../model/location.model';




@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {
  students: Student[] = [];
  locations: Location[] =[];


  constructor(
    private studentsService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private locationService: LocationService
  ) {  }

  ngOnInit(): void {
    this.loadAllStudent();
  }

 

  loadAllStudent(): void { 
    forkJoin({
      locations : this.locationService.getAllLocation(),
      students : this.studentsService.getAllStudent()}).subscribe({
        next: ({locations, students}) => {
          this.locations = locations;
          this.students = students;
          this.cdr.markForCheck();
        },
        error: (err) => {
          console.log(err)
        }
      });

    

  }


  deleteStudent(id: string): void {

    this.studentsService.deleteStudent(id).subscribe({

      next: (res) => {
        console.log('Student deleted');
        this.loadAllStudent();
        this.cdr.reattach();
      },

      error: (err) => {

        console.log(err);

      }

    });

  }


  getStudentById(id: string): void {
    this.studentsService.getStudentById(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("Data Get Successfully");
        this.router.navigate(['/updatestudent', id]);

      },
      error: (err) => {
        console.log(err);
      }


    });


  }



}
