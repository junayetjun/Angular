import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanygrowthComponent } from './addcompanygrowth.component';

describe('AddcompanygrowthComponent', () => {
  let component: AddcompanygrowthComponent;
  let fixture: ComponentFixture<AddcompanygrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcompanygrowthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcompanygrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
