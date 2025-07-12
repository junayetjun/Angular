import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneuserorder } from './oneuserorder';

describe('Oneuserorder', () => {
  let component: Oneuserorder;
  let fixture: ComponentFixture<Oneuserorder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Oneuserorder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oneuserorder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
