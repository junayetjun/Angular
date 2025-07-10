import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdProductCreate } from './prod-product-create';

describe('ProdProductCreate', () => {
  let component: ProdProductCreate;
  let fixture: ComponentFixture<ProdProductCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdProductCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdProductCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
