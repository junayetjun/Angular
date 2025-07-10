import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialList } from './raw-material-list';

describe('RawMaterialList', () => {
  let component: RawMaterialList;
  let fixture: ComponentFixture<RawMaterialList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawMaterialList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
