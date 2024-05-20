import { TestBed } from '@angular/core/testing';

import { TipoBodegaService } from './tipo-bodega.service';

describe('TipoBodegaService', () => {
  let service: TipoBodegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoBodegaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
