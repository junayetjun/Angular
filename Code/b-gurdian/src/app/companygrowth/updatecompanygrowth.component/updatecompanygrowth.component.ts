import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanygrowthService } from '../../service/companygrowth.service';
import { CompanyGrowth } from '../../model/companygrowth.model';

@Component({
  selector: 'app-updatecompanygrowth',
  standalone: false,
  templateUrl: './updatecompanygrowth.component.html',
  styleUrls: ['./updatecompanygrowth.component.css']
})
export class UpdatecompanygrowthComponent implements OnInit {

  companyForm!: FormGroup;
  companyId!: string;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private companyGrowthService: CompanygrowthService
  ) {}

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.loadCompanyData();
  }

  initForm(): void {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      currentDividend: ['', [Validators.required, ]],
      firstDividend: ['', [Validators.required, ]],
      discountRate: ['', [Validators.required, ]]
    });
  }

  loadCompanyData(): void {
    this.companyGrowthService.getById(this.companyId).subscribe({
      next: (data: CompanyGrowth) => {
        this.companyForm.patchValue({
          name: data.name,
          currentDividend: data.currentDividend,
          firstDividend: data.firstDividend,
          discountRate: data.discountRate
        });
      },
      error: (err) => {
        console.error('Error fetching company data', err);
      }
    });
  }

  onSubmit(): void {
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const updatedData: CompanyGrowth = {
      id: this.companyId,
      ...this.companyForm.value
    };

    this.companyGrowthService.updateCompanyGrowth(this.companyId, updatedData).subscribe({
      next: () => {
        console.log('Company updated successfully');
        this.router.navigate(['/viewallcompany']);
      },
      error: (err) => {
        console.error('Error updating company', err);
        this.isSubmitting = false;
      }
    });
  }
}
