import { Component, OnInit } from '@angular/core';
import { PoliceStation } from '../../model/policeStation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicestationService } from '../../service/policestation-service';

@Component({
  selector: 'app-addpolicestation',
  standalone: false,
  templateUrl: './addpolicestation.html',
  styleUrl: './addpolicestation.css'
})
export class Addpolicestation implements OnInit {


  policeStations: PoliceStation[] = [];
  psForm !: FormGroup;
  editing: boolean = false;



  constructor(
    private fb: FormBuilder,
    private psService: PolicestationService
  ){
    this.psForm = this.fb.group({
      id: [''],
      name: ['', Validators.required]
    });
  }



  ngOnInit(): void {
    this.loadPoliceStation()
  }


  loadPoliceStation(){
    this.psService.getAll().subscribe(data =>{
      this.policeStations =data;
    });
  }



  onSubmit(){ 
    if(this.psForm.invalid)return;

    if(this.editing){
      this.psService.update(this.psForm.value).subscribe({
        next: (rep) => {
          alert('Updated Successfully');
          this.loadPoliceStation();
          this.cancelEdit();
          
        }
      });
    } else{
      const { name } =this.psForm.value;
      this.psService.add({ name }).subscribe(() => {
        alert('Added Successfully');
        this.loadPoliceStation();
        this.psForm.reset();
        this.editing =false;
      });
    }
    
  }


  editPoliceStation(ps: PoliceStation){
    this.editing =true;
    this.psForm.patchValue({
      id: ps.id,
      name: ps.name
    });
  }


  deletePoliceStation(id: string){
    if(confirm('Are you sure')){
      this.psService.delete(id).subscribe(()=> {
        alert('Deleted');
        this.loadPoliceStation();
      });
    }
  }


  cancelEdit(){
    this.editing = false;
    this.psForm.reset();
  }
}
