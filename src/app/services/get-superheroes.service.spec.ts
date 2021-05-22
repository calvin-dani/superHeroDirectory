import { TestBed } from '@angular/core/testing';

import { GetSuperheroesService } from './get-superheroes.service';

describe('GetSuperheroesService', () => {
  let service: GetSuperheroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSuperheroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
