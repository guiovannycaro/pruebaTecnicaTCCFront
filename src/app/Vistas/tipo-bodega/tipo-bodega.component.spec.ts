import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBodegaComponent } from './tipo-bodega.component';

describe('TipoBodegaComponent', () => {
  let component: TipoBodegaComponent;
  let fixture: ComponentFixture<TipoBodegaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoBodegaComponent]
    });
    fixture = TestBed.createComponent(TipoBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
