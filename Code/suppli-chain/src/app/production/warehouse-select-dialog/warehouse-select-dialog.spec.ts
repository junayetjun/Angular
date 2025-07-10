import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseSelectDialog } from './warehouse-select-dialog';

describe('WarehouseSelectDialog', () => {
  let component: WarehouseSelectDialog;
  let fixture: ComponentFixture<WarehouseSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseSelectDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseSelectDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
