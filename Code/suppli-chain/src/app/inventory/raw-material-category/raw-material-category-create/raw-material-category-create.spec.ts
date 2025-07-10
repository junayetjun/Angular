import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialCategoryCreate } from './raw-material-category-create';

describe('RawMaterialCategoryCreate', () => {
  let component: RawMaterialCategoryCreate;
  let fixture: ComponentFixture<RawMaterialCategoryCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawMaterialCategoryCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialCategoryCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
