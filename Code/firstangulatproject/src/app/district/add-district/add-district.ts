import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoliceStation } from '../../model/policeStation';
import { DistrictService } from '../../service/district-service';
import { PolicestationService } from '../../service/policestation-service';
import { District } from '../../model/district';

@Component({
  selector: 'app-add-district',
  standalone: false,
  templateUrl: './add-district.html',
  styleUrl: './add-district.css'
})
export class AddDistrict {

  districtForm: FormGroup;
  policeStations: PoliceStation[] = [];

  constructor(
    private fb: FormBuilder,
    private districtService: DistrictService,
    private policeStationService: PolicestationService
  ) {
    this.districtForm = this.fb.group({
      name: ['', Validators.required],
      policeStations: [[], Validators.required]
    })
  }

  ngOnInit() {
    this.loadPoliceStation()
  }


  loadPoliceStation() {
    this.policeStationService.getAll().subscribe(data => {
      this.policeStations = data;
    });
  }


  onSubmit() {
    if (this.districtForm.invalid) return;

    const district: District = this.districtForm.value;

    this.districtService.add(district).subscribe(() => {
      alert('District added successfully');
      this.districtForm.reset();
    })
  }


}
