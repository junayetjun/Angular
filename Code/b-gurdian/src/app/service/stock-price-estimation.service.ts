// src/app/services/stock-price-estimation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { StockPriceEstimation } from '../model/stock-price-estimation';

@Injectable({
  providedIn: 'root'
})
export class StockPriceEstimationService {
  private apiUrl = 'http://localhost:3000/stockEstimations';

  constructor(private http: HttpClient) { }

  getAll(): Observable<StockPriceEstimation[]> {
    return this.http.get<StockPriceEstimation[]>(this.apiUrl);
  }

  getById(id: string): Observable<StockPriceEstimation> {
    return this.http.get<StockPriceEstimation>(`${this.apiUrl}/${id}`);
  }

  create(model: StockPriceEstimation): Observable<StockPriceEstimation> {
    return this.http.post<StockPriceEstimation>(this.apiUrl, model);
  }

  update(model: StockPriceEstimation): Observable<StockPriceEstimation> {
    return this.http.put<StockPriceEstimation>(`${this.apiUrl}/${model.id}`, model);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getShortTermGrowthRate(model: StockPriceEstimation): number {
    if (model.currentDividend <= 0 || model.time <= 0) {
      return NaN;
    }
    return Math.pow(model.currentDividend / model.firstDividend, 1 / model.time);
  }
  getGrowthDetailsUsingRate(model: StockPriceEstimation): { shortTermGrowthRate: number, yearlyDividends: number[] } {
    if (
      model.currentDividend <= 0 ||
      model.firstDividend <= 0 ||
      model.time <= 0
    ) {
      console.warn('Invalid input: currentDividend, firstDividend, and time must all be greater than 0.');
      return {
        shortTermGrowthRate: NaN,
        yearlyDividends: []
      };
    }

    const shortTermGrowthRate = this.getShortTermGrowthRate(model); // returns % (e.g. 12.5)
    const yearlyDividends: number[] = [];

    let previousDividend = model.currentDividend;

    for (let year = 1; year <= model.time; year++) {
      // Using increasing exponent per your request
      const thisYearDividend = previousDividend * Math.pow((1 + shortTermGrowthRate / 100), year);
      yearlyDividends.push(Number(thisYearDividend.toFixed(4)));
      previousDividend = thisYearDividend;
    }

    return {
      shortTermGrowthRate: Number(shortTermGrowthRate.toFixed(4)),
      yearlyDividends
    };
  }

  calculateTerminalValue(model: StockPriceEstimation, shortTermGrowthRate: number): number {
    const longTermGrowthRate = 0.06;
    const discountRateDecimal = model.discountRate / 100; // convert from percent to decimal

    // Validate inputs
    if (
      model.currentDividend <= 0 ||
      model.time <= 0 ||
      discountRateDecimal <= longTermGrowthRate
    ) {
      console.warn('Invalid inputs. Ensure dividend > 0, time > 0, and discountRate > 6%');
      return NaN;
    }

    const growthRateDecimal = shortTermGrowthRate / 100;

    // Step 1: Calculate Dividend at year `t`
    let dt = model.currentDividend;
    for (let i = 1; i <= model.time; i++) {
      dt *= (1 + growthRateDecimal);
    }

    // Step 2: Calculate Dividend at year `t+1`
    const tPlusOneDividend = dt * Math.pow(1 + growthRateDecimal, 1);

    // Step 3: Calculate Terminal Value
    const terminalValue = tPlusOneDividend / (discountRateDecimal - longTermGrowthRate);

    return Number(terminalValue.toFixed(4));
  }



}
