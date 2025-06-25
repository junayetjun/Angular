import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {
  students: any;

  constructor(private studentsService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.loadAllStudent();
  }

  // ngOnInit(): void {
  //   this.loadAllStudent();
  // }

  loadAllStudent() {

    this.students = this.studentsService.getAllStudent();
    console.log(this.students);

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
