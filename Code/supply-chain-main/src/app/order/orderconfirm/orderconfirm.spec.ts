import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderconfirm } from './orderconfirm';

describe('Orderconfirm', () => {
  let component: Orderconfirm;
  let fixture: ComponentFixture<Orderconfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Orderconfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderconfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
