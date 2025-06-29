import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { Student } from '../model/students.mode';


@Component({
  selector: 'app-exampleaddstudent',
  standalone: false,
  templateUrl: './exampleaddstudent.html',
  styleUrl: './exampleaddstudent.css'
})
export class Exampleaddstudent implements OnInit {


  formGroup !: FormGroup;

  constructor(
    private studentService : StudentService,
    private fromBuilder : FormBuilder,
    private router : Router

  ){ }


  ngOnInit(): void {
    this.formGroup = this.fromBuilder.group({

      name : [''],
      email : [''],
      fee : ['']

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
