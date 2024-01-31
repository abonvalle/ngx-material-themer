import { TestBed } from '@angular/core/testing';

import { PalettesService } from './palettes.service';

describe('PalettesService', () => {
  let service: PalettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
