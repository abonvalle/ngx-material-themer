import { Injectable } from '@angular/core';
import { computeContrast } from '../util-colors';
import { Color, emptyPalette, matRedPalette } from './model';

@Injectable({
  providedIn: 'root'
})
export class SimpleThemeConstants {
  readonly defaultIsDarkTheme = false;
  readonly defaultPrimaryPal = emptyPalette;
  readonly defaultAccentPal = emptyPalette;
  readonly defaultFontLight = '#ffffff';
  readonly defaultFontDark = '#000000';
  readonly defaultWarnPal = matRedPalette.map((color) => ({
    ...color,
    marks: color.marks ?? [],
    ...{
      ...(computeContrast(color.hexCode, this.defaultFontLight, this.defaultFontDark) as {
        contrastLight: boolean;
        contrastRatio: number;
      })
    }
  })) as Color[];
  readonly defaultDensity = 0;
  readonly defaultAutomaticContrast = true;
  constructor() {}
}
