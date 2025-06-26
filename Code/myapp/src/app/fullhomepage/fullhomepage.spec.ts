import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fullhomepage } from './fullhomepage';

describe('Fullhomepage', () => {
  let component: Fullhomepage;
  let fixture: ComponentFixture<Fullhomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fullhomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fullhomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
