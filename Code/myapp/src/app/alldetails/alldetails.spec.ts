import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alldetails } from './alldetails';

describe('Alldetails', () => {
  let component: Alldetails;
  let fixture: ComponentFixture<Alldetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alldetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alldetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
