import { TestBed } from '@angular/core/testing';

import { TipiServiceService } from './tipi-service.service';

describe('TipiServiceService', () => {
  let service: TipiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
