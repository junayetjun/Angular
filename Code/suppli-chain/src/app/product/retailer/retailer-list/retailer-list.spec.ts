import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerList } from './retailer-list';

describe('RetailerList', () => {
  let component: RetailerList;
  let fixture: ComponentFixture<RetailerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetailerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
