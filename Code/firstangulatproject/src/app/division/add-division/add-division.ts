import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { District } from '../../model/district';
import { DivisionService } from '../../service/division-service';
import { DistrictService } from '../../service/district-service';

@Component({
  selector: 'app-add-division',
  standalone: false,
  templateUrl: './add-division.html',
  styleUrl: './add-division.css'
})
export class AddDivision {

  divisionForm: FormGroup;
  districts: District[] = [];



  constructor(
    private fb: FormBuilder,
    private divisionService: DivisionService,
    private districtService: DistrictService
  ) {
    this.divisionForm = this.fb.group({
      name: ['', Validators.required],
      districts: [[], Validators.required]
    });
  }


  ngOnInit() {
    this.loadDistricts();
  }

  loadDistricts() {
    this.districtService.getAll().subscribe(data => {
      this.districts = data;
    });
  }


  onSubmit() {
    if (this.divisionForm.invalid) return;


    const division = this.divisionForm.value;

    this.divisionService.add(division).subscribe(() => {
      alert('Division are added successfully!');
      this.divisionForm.reset();
    })

  }



}
