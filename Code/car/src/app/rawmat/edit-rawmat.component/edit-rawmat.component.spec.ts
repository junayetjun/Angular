import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRawmatComponent } from './edit-rawmat.component';

describe('EditRawmatComponent', () => {
  let component: EditRawmatComponent;
  let fixture: ComponentFixture<EditRawmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRawmatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRawmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
