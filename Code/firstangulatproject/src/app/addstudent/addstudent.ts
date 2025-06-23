import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { Student } from '../../model/students.mode';
import { error } from 'console';

@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css'
})
export class Addstudent implements OnInit {

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
