import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Division } from '../../model/division';
import { CountryService } from '../../service/country-service';
import { DivisionService } from '../../service/division-service';

@Component({
  selector: 'app-add-country',
  standalone: false,
  templateUrl: './add-country.html',
  styleUrl: './add-country.css'
})
export class AddCountry {

  countryForm: FormGroup;
  divisions: Division[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private divisionService: DivisionService
  ) {
    this.countryForm = this.fb.group({
      name: ['', Validators.required],
      divisions: [[], Validators.required]
    });
  }


  ngOnInit() {

    this.loadDivisions();
  }


  loadDivisions() {
    this.divisionService.getAll().subscribe(data => {
      this.divisions = data;
    });
  }


  onSubmit() {
    if (this.countryForm.invalid) return;


    const county = this.countryForm.value;


    this.countryService.add(county).subscribe(() => {
      alert('Country added successfullt!');
      this.countryForm.reset();
    })

  }





}
