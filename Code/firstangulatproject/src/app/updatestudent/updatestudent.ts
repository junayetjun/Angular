import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../model/students.mode';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LocationService } from '../service/location.service';
import { Location } from '../model/location.model';

@Component({
  selector: 'app-updatestudent',
  standalone: false,
  templateUrl: './updatestudent.html',
  styleUrl: './updatestudent.css'
})
export class Updatestudent implements OnInit {


  id: string = '';
  student: Student = new Student();
  locations: Location[] = [];

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {

    this.id =this.route.snapshot.params['id'];
    this.loadStudentById();
    this.loadLocation();

    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id') || '';

    //   if (this.id) {
    //     this.loadStudentById();
    //   }

    // })
  }


  loadStudentById() {

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe({
      next: (res) => {
        this.student = res;
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Error fetching student: ', err);
      }

    });

  }


  updateStudent(): void {

    this.studentService.updateStudent(this.id, this.student)
    .subscribe({

      next: () => {

        this.router.navigate(['allstu']);
      },
      error: (err) => {
        console.error('Updated failed', err);
      }


    });

  }


  loadLocation(): void{
    this.locationService.getAllLocation().subscribe({
      next: (loc) => {

        this.locations = loc;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.log('Error fetching locations: ',err);
      }

    });
  }

  compareLocation(l1: Location, l2: Location): boolean {
    return l1 && l2 ? l1.id === l2.id : l1 === l2;
  }
  

  

}
