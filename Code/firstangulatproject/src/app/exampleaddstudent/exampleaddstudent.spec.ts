import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exampleaddstudent } from './exampleaddstudent';

describe('Exampleaddstudent', () => {
  let component: Exampleaddstudent;
  let fixture: ComponentFixture<Exampleaddstudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exampleaddstudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exampleaddstudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
