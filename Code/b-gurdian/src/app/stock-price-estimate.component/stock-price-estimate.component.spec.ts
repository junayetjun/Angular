import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPriceEstimateComponent } from './stock-price-estimate.component';

describe('StockPriceEstimateComponent', () => {
  let component: StockPriceEstimateComponent;
  let fixture: ComponentFixture<StockPriceEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockPriceEstimateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockPriceEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
