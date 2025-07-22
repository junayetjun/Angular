import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanygrowthService } from '../../service/companygrowth.service';
import { Router } from '@angular/router';
import { CompanyGrowth } from '../../model/companygrowth.model';

@Component({
  selector: 'app-addcompanygrowth.component',
  standalone: false,
  templateUrl: './addcompanygrowth.component.html',
  styleUrl: './addcompanygrowth.component.css'
})
export class AddcompanygrowthComponent {

 growthForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private companyGrowthService: CompanygrowthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.growthForm = this.fb.group({
      name: [''],
      currentDividend: [''],
      firstDividend: [''],
      discountRate: ['']
    });

  }


  addCompanyGrowth(){
    const companyGrowthModel: CompanyGrowth = {...this.growthForm.value};

    this.companyGrowthService.saveCompanyGrowth(companyGrowthModel).subscribe({
    next: (res) =>{
      console.log('Company saved successfully',res);
      this.growthForm.reset();
      this.router.navigate(['/viewallsource']);
    }, 
    error: (err) => {
      console.log(err);
    }
  });



  }


}
