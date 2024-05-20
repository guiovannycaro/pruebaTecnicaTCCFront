import { TestBed } from '@angular/core/testing';

import { DetalleenviotempService } from './detalleenviotemp.service';

describe('DetalleenviotempService', () => {
  let service: DetalleenviotempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleenviotempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
