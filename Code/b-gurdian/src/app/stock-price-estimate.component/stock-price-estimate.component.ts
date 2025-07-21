import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StockPriceEstimation } from '../model/stock-price-estimation';
import { StockPriceEstimationService } from '../service/stock-price-estimation.service';
import { CompanygrowthService } from '../service/companygrowth.service';
import { CompanyGrowth } from '../model/companygrowth.model';

@Component({
  selector: 'app-stock-price-estimate',
  standalone: false,
  templateUrl: './stock-price-estimate.component.html',
  styleUrls: ['./stock-price-estimate.component.css']
})
export class StockPriceEstimateComponent implements OnInit {

  selectedItemId!: string;
  companygrowths!: any;
  oneData: CompanyGrowth = new CompanyGrowth();

  model: StockPriceEstimation = {
    currentDividend: 0,
    firstDividend: 0,
    discountRate: 0,
    time: 0
  };

  stockEstimations: StockPriceEstimation[] = [];
  shortTermGrowthRate?: number;
  yearlyDividends: number[] = [];
  terminalValue?: number;

  constructor(
    private estimationService: StockPriceEstimationService,
    private companyGrowthService: CompanygrowthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAllEstimations(),
      this.loadAllData(),
      this.onSelectChange()
  }

  loadAllEstimations(): void {
    this.estimationService.getAll().subscribe({
      next: (data) => this.stockEstimations = data,
      error: (err) => console.error('Error loading stock estimations', err)
    });
  }

  calculateGrowth(): void {
    this.model.currentDividend = this.oneData.currentDividend;
    this.model.firstDividend = this.oneData.firstDividend;
    this.model.discountRate = this.oneData.discountRate;

    const result = this.estimationService.getGrowthDetailsUsingRate(this.model);
    this.shortTermGrowthRate = result.shortTermGrowthRate;
    this.yearlyDividends = result.yearlyDividends;

    if (this.shortTermGrowthRate !== undefined) {
      this.terminalValue = this.estimationService.calculateTerminalValue(
        this.model,
        this.shortTermGrowthRate
      );
    }
  }

  saveEstimation(): void {
    if (this.model.id) {
      this.estimationService.update(this.model).subscribe({
        next: () => {
          console.log('Updated successfully');
          this.loadAllEstimations();
        },
        error: err => console.error('Update failed', err)
      });
    } else {
      this.estimationService.create(this.model).subscribe({
        next: (created) => {
          console.log('Created successfully', created);
          this.loadAllEstimations();
          this.reset();
        },
        error: err => console.error('Create failed', err)
      });
    }
  }

  deleteEstimation(id?: string): void {
    if (!id) return;
    this.estimationService.delete(id).subscribe({
      next: () => {
        console.log('Deleted successfully');
        this.loadAllEstimations();
      },
      error: err => console.error('Delete failed', err)
    });
  }

  editEstimation(estimation: StockPriceEstimation): void {
    this.model = { ...estimation };
    this.shortTermGrowthRate = undefined;
    this.yearlyDividends = [];
    this.terminalValue = undefined;
  }

  reset(): void {
    this.model = {
      currentDividend: 0,
      firstDividend: 0,
      discountRate: 0,
      time: 0
    };
    this.shortTermGrowthRate = undefined;
    this.yearlyDividends = [];
    this.terminalValue = undefined;
  }

  isValidTerminalValue(value: number | undefined): boolean {
    return value !== undefined && !isNaN(value);
  }


  loadAllData(): void {
    this.companygrowths = this.companyGrowthService.getAllData();
    this.cdr.markForCheck();
  }

  getById(id: string): void {
    this.companyGrowthService.getById(id).subscribe(data => {
      this.oneData = data;
      this.cdr.markForCheck();
    })

  }

  onSelectChange() {
    console.log('Selected ID:', this.selectedItemId);
    this.getById(this.selectedItemId);
    this.cdr.markForCheck();
  }


}
