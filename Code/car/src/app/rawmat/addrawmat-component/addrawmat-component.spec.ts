import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrawmatComponent } from './addrawmat-component';

describe('AddrawmatComponent', () => {
  let component: AddrawmatComponent;
  let fixture: ComponentFixture<AddrawmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddrawmatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrawmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
