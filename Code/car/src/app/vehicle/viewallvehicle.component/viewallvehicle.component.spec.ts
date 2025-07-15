import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallvehicleComponent } from './viewallvehicle.component';

describe('ViewallvehicleComponent', () => {
  let component: ViewallvehicleComponent;
  let fixture: ComponentFixture<ViewallvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewallvehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
