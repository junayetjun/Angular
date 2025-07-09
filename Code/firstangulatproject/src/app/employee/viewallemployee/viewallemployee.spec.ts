import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewallemployee } from './viewallemployee';

describe('Viewallemployee', () => {
  let component: Viewallemployee;
  let fixture: ComponentFixture<Viewallemployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewallemployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewallemployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
