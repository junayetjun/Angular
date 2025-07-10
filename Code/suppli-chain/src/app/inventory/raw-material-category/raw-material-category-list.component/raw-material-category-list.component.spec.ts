import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialCategoryListComponent } from './raw-material-category-list.component';

describe('RawMaterialCategoryListComponent', () => {
  let component: RawMaterialCategoryListComponent;
  let fixture: ComponentFixture<RawMaterialCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawMaterialCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
