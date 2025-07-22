import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecompanygrowthComponent } from './updatecompanygrowth.component';

describe('UpdatecompanygrowthComponent', () => {
  let component: UpdatecompanygrowthComponent;
  let fixture: ComponentFixture<UpdatecompanygrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatecompanygrowthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecompanygrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
