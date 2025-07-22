import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompanygrowthService } from '../../service/companygrowth.service';
import { Router } from '@angular/router';
import { CompanyGrowth } from '../../model/companygrowth.model';

@Component({
  selector: 'app-viewallcompanygrowth',
  standalone: false,
  templateUrl: './viewallcompanygrowth.component.html',
  styleUrls: ['./viewallcompanygrowth.component.css']
})
export class ViewallcompanygrowthComponent implements OnInit {

  companyGrowthList: CompanyGrowth[] = [];

  constructor(
    private companyGrowthService: CompanygrowthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAllCompanyGrowth();
  }

  loadAllCompanyGrowth(): void {
    this.companyGrowthService.getAllData().subscribe({
      next: (data) => {
        this.companyGrowthList = data;
        console.log(this.companyGrowthList);
        this.cdr.detectChanges(); // optional
      },
      error: (err) => {
        console.error('Error loading company growth data', err);
      }
    });
  }

  deleteCompanyGrowth(id: string): void {
    this.companyGrowthService.deleteCompanyGroth(id).subscribe({
      next: () => {
        console.log('Record Deleted');
        this.loadAllCompanyGrowth();
        this.cdr.reattach();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getCompanyGrowthById(id: string): void {
    this.companyGrowthService.getById(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log('Data retrieved successfully.');
        this.router.navigate(['/updatecompanygrowth', id]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
