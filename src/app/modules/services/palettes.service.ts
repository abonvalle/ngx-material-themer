import { Injectable } from '@angular/core';
import { SimplifiedPalette } from '@features/legacy/simplified';
import { MaterialPalette } from '@models/material/material-palette.interface';

@Injectable({
  providedIn: 'root'
})
export class PalettesService {
  constructor() {}

  simplifyPalette(pal: MaterialPalette): SimplifiedPalette {
    return {
      darker: { main: pal['700'], contrast: pal.contrast['700'] },
      default: { main: pal['500'], contrast: pal.contrast['500'] },
      lighter: { main: pal['100'], contrast: pal.contrast['100'] },
      text: { main: pal['A200'], contrast: pal.contrast['A200'] }
    };
  }

  normalizePalette(simplPal: SimplifiedPalette): MaterialPalette {
    return {
      '050': '#ffffff',
      '100': simplPal.lighter.main,
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': simplPal.default.main,
      '600': '#ffffff',
      '700': simplPal.darker.main,
      '800': '#ffffff',
      '900': '#ffffff',
      A100: '#ffffff',
      A200: simplPal.text.main,
      A400: '#ffffff',
      A700: '#ffffff',
      contrast: {
        '050': '#000000',
        '100': simplPal.lighter.contrast,
        '200': '#000000',
        '300': '#000000',
        '400': '#000000',
        '500': simplPal.default.contrast,
        '600': '#000000',
        '700': simplPal.darker.contrast,
        '800': '#000000',
        '900': '#000000',
        A100: '#000000',
        A200: simplPal.text.contrast,
        A400: '#000000',
        A700: '#000000'
      }
    };
  }
}
