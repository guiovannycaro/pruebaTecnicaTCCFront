import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarclienteComponent } from './editarcliente.component';

describe('EditarclienteComponent', () => {
  let component: EditarclienteComponent;
  let fixture: ComponentFixture<EditarclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarclienteComponent]
    });
    fixture = TestBed.createComponent(EditarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
