import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDistrict } from './view-all-district';

describe('ViewAllDistrict', () => {
  let component: ViewAllDistrict;
  let fixture: ComponentFixture<ViewAllDistrict>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllDistrict]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDistrict);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
