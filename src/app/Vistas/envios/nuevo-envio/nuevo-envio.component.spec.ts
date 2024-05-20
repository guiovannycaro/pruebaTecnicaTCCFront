import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioComponent } from './nuevo-envio.component';

describe('NuevoEnvioComponent', () => {
  let component: NuevoEnvioComponent;
  let fixture: ComponentFixture<NuevoEnvioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoEnvioComponent]
    });
    fixture = TestBed.createComponent(NuevoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
