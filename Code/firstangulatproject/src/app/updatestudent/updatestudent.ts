import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../model/students.mode';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  standalone: false,
  templateUrl: './updatestudent.html',
  styleUrl: './updatestudent.css'
})
export class Updatestudent implements OnInit {


  id: string = '';
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {

    this.loadStudentById();

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

}
