import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositModel } from '../model/deposittest';
import { DepositService } from '../service/deposit-service';

@Component({
  selector: 'app-deposit-calculator',
  standalone: false,
  templateUrl: './deposit-calculator.html',
  styleUrls: ['./deposit-calculator.css']
})
export class DepositCalculator implements OnInit {
  formGroup!: FormGroup;
  result: DepositModel | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private depositService: DepositService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      amount: [0, [Validators.required]],
      years: [0, [Validators.required]],
      rate: [0, [Validators.required]]
    });
  }

  calculate(): void {
    const amount = this.formGroup.value.amount;
    const years = this.formGroup.value.years;
    const rate = this.formGroup.value.rate;

    const total = amount * Math.pow(1 + rate / 100, years);
    const interest = total - amount;
    const tax = interest * 0.15;
    const finalAmount = total - tax;

    const deposit: DepositModel = {
      amount,
      years,
      rate,
      interest,
      tax,
      finalAmount
    };

    // Save it to backend (db.json)
    this.depositService.saveDeposit(deposit).subscribe(saved => {
      this.result = saved;
    });
  }
}
