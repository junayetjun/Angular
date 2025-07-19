import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCalculator } from './deposit-calculator';

describe('DepositCalculator', () => {
  let component: DepositCalculator;
  let fixture: ComponentFixture<DepositCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
