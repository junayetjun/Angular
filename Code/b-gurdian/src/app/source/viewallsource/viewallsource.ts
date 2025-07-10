import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SourceService } from '../../service/source-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallsource',
  standalone: false,
  templateUrl: './viewallsource.html',
  styleUrl: './viewallsource.css'
})
export class Viewallsource implements OnInit{


  sourceModel: any;

  constructor(
    private sourceService: SourceService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}



  ngOnInit(): void {
   this.loadAllSource();
  }



  loadAllSource(){
    this.sourceModel =this.sourceService.getAllSource();
    console.log(this.sourceModel);
  }


deleteSource(id: string): void{
  this.sourceService.deleteSource(id).subscribe({
    next: (res) =>{
      console.log('Student Deleted');
      this.loadAllSource();
      this.cdr.reattach();
    },
    error: (err) => {
      console.log(err);
    }
  });
}


getSourceById(id: string): void{
  this.sourceService.getSourceById(id).subscribe({
    next: (res) => {
      console.log(res);
      console.log('Data get Successfully.');
      this.router.navigate(['/updatesource', id]);
    },
    error: (err) => {
      console.log(err);
    }
  })
}




}
