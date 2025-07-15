import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { RawmatModule } from '../rawmat/rawmat-module';
import { RawmatService } from '../../service/rawmat.service';

@Component({
  selector: 'app-edit-rawmat.component',
  standalone: false,
  templateUrl: './edit-rawmat.component.html',
  styleUrl: './edit-rawmat.component.css'
})
export class EditRawmatComponent implements OnInit {
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rawmatService.getById(id).subscribe({
        next: (rawmat) => {
          this.rawmat = rawmat;
        },
        error: (error) => {
          console.error('Error fetching rawmat:', error);
        }
      });
    }
  }

  calculateTotalPrice() {
    this.rawmat.totalPrice = this.rawmat.quantity * this.rawmat.unitPrice;
  }

  updateRawmat() {
    this.calculateTotalPrice();
    if (this.rawmat.id) {
      this.rawmatService.update(this.rawmat.id, this.rawmat).subscribe({
        next: (response) => {
          console.log('Rawmat updated:', response);
          this.router.navigate(['/listrawmat']);
        },
        error: (error) => {
          console.error('Error updating rawmat:', error);
        }
      });
    }
  }
}