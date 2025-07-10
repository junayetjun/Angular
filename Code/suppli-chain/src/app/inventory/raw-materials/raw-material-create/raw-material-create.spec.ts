import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialCreate } from './raw-material-create';

describe('RawMaterialCreate', () => {
  let component: RawMaterialCreate;
  let fixture: ComponentFixture<RawMaterialCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawMaterialCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
