import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedProductStockComponent } from './finished-product-stock.component';

describe('FinishedProductStockComponent', () => {
  let component: FinishedProductStockComponent;
  let fixture: ComponentFixture<FinishedProductStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinishedProductStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
