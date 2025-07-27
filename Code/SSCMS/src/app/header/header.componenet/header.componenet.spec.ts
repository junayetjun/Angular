import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponenet } from './header.componenet';

describe('HeaderComponenet', () => {
  let component: HeaderComponenet;
  let fixture: ComponentFixture<HeaderComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
