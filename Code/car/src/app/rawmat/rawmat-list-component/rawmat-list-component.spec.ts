import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmatListComponent } from './rawmat-list-component';

describe('RawmatListComponent', () => {
  let component: RawmatListComponent;
  let fixture: ComponentFixture<RawmatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawmatListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawmatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
