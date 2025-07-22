import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcompanygrowthComponent } from './viewallcompanygrowth.component';

describe('ViewallcompanygrowthComponent', () => {
  let component: ViewallcompanygrowthComponent;
  let fixture: ComponentFixture<ViewallcompanygrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewallcompanygrowthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallcompanygrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
