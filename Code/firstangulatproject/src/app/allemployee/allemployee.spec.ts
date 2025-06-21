import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allemployee } from './allemployee';

describe('Allemployee', () => {
  let component: Allemployee;
  let fixture: ComponentFixture<Allemployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Allemployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allemployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
