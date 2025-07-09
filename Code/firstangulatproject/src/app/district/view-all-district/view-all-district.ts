import { Component } from '@angular/core';
import { District } from '../../model/district';
import { PoliceStation } from '../../model/policeStation';
import { DistrictService } from '../../service/district-service';
import { PolicestationService } from '../../service/policestation-service';

@Component({
  selector: 'app-view-all-district',
  standalone: false,
  templateUrl: './view-all-district.html',
  styleUrl: './view-all-district.css'
})
export class ViewAllDistrict {

  districts: District[] = [];
  policaStations!: PoliceStation[];


  constructor(
    private districtService: DistrictService,
    private policeStationService: PolicestationService
  ){}


  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.policeStationService.getAll().subscribe(ps =>{
      this.policaStations =ps;
      this.districtService.getAll().subscribe(districts =>{
        this.districts =districts;
      });
    });
  }


  getPoliceStationNames(ids: string[]): string{
    const names = this.policaStations
    .filter(ps => ids.includes(ps.id!))
    .map(ps => ps.name);

    return names.join(', ');
  }


  deleteDistricts(id : string){
    if(confirm('Are you sure')){
      this.districtService.delete(id).subscribe(() => {
        alert('District deleted');
        this.loadData();
      });
    }
  }






}
