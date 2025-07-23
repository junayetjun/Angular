import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addsource } from './addsource';

describe('Addsource', () => {
  let component: Addsource;
  let fixture: ComponentFixture<Addsource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addsource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addsource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
