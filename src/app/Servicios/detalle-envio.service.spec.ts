import { TestBed } from '@angular/core/testing';

import { DetalleEnvioService } from './detalle-envio.service';

describe('DetalleEnvioService', () => {
  let service: DetalleEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
