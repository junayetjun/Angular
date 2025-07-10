import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMatUsage } from './raw-mat-usage';

describe('RawMatUsage', () => {
  let component: RawMatUsage;
  let fixture: ComponentFixture<RawMatUsage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawMatUsage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMatUsage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
