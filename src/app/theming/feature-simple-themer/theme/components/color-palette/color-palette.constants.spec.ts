import { TestBed } from '@angular/core/testing';

import { ColorPaletteConstants } from './color-palette.constants';

describe('ColorPaletteConstants', () => {
  let service: ColorPaletteConstants;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorPaletteConstants);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
