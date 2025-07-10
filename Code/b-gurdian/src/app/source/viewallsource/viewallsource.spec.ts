import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewallsource } from './viewallsource';

describe('Viewallsource', () => {
  let component: Viewallsource;
  let fixture: ComponentFixture<Viewallsource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewallsource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewallsource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
