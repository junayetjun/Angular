import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allstudents } from './allstudents';

describe('Allstudents', () => {
  let component: Allstudents;
  let fixture: ComponentFixture<Allstudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Allstudents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allstudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
