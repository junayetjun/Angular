import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerCreateDialog } from './retailer-create-dialog';

describe('RetailerCreateDialog', () => {
  let component: RetailerCreateDialog;
  let fixture: ComponentFixture<RetailerCreateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetailerCreateDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerCreateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
