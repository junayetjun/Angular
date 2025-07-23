import { Component } from '@angular/core';
import { SourceModel } from '../../model/source-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SourceService } from '../../service/source-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsource',
  standalone: false,
  templateUrl: './addsource.html',
  styleUrl: './addsource.css'
})
export class Addsource {

  
  sourseForm!: FormGroup;
 

  constructor(
    private fb: FormBuilder,
    private sourceService: SourceService,
    private router: Router
  ){ }


  ngOnInit(){

     this.sourseForm = this.fb.group({

    sourceName: [''],
    photo: ['']


  });
  }

  
addSource(): void{
  const sourceModel: SourceModel ={...this.sourseForm.value};

  this.sourceService.saveSource(sourceModel).subscribe({
    next: (res) =>{
      console.log('Source saved successfully',res);
      this.sourseForm.reset();
      this.router.navigate(['/viewallsource']);
    }, 
    error: (err) => {
      console.log(err);
    }
  });
}

  




}
