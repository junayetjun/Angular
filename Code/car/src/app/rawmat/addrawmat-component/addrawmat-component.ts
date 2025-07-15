import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { RawmatService } from '../../service/rawmat.service';
import { RawmatModule } from '../rawmat/rawmat-module';



@Component({
  selector: 'app-addrawmat-component',
  standalone: false,
  templateUrl: './addrawmat-component.html',
  styleUrl: './addrawmat-component.css'
})
export class AddrawmatComponent {
  rawmat: RawmatModule = {
    productName: '',
    companyName: '',
    contactPerson: '',
    contactNumber: '',
    quantity: 0,
    unitPrice: 0,
    totalPrice: 0,
    dateL: new Date()
  };

  constructor(
    private rawmatService: RawmatService, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  // Total Price গণনা করা
  calculateTotalPrice() {
    this.rawmat.totalPrice = this.rawmat.quantity * this.rawmat.unitPrice;
  }

  // ফর্ম রিসেট করা
  resetForm() {
    this.rawmat = {
      productName: '',
      companyName: '',
      contactPerson: '',
      contactNumber: '',
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0,
      dateL: new Date()
    };
  }

  addRawmat() {
    this.calculateTotalPrice(); // সংরক্ষণের আগে totalPrice গণনা
    this.rawmatService.save(this.rawmat).subscribe({
      next: (response) => {
        console.log('Rawmat added:', response);
        this.resetForm(); // ফর্ম রিসেট
        this.router.navigate(['/listrawmat']);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error adding rawmat:', error);
      }
    });
  }
}
