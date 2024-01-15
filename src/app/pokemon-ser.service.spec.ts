import { TestBed } from '@angular/core/testing';

import { PokemonSerService } from './pokemon-ser.service';

describe('PokemonSerService', () => {
  let service: PokemonSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
