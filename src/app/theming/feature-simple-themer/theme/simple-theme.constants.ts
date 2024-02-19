import { Injectable } from '@angular/core';
import { emptyPalette, matRedPalette } from './model';

@Injectable({
  providedIn: 'root'
})
export class SimpleThemeConstants {
  readonly defaultIsDarkTheme = false;
  readonly defaultPrimaryPal = emptyPalette;
  readonly defaultAccentPal = emptyPalette;
  readonly defaultWarnPal = matRedPalette;
  readonly defaultFontLight = '#ffffff';
  readonly defaultFontDark = '#000000';
  readonly defaultDensity = 0;
  readonly defaultAutomaticContrast = true;
  constructor() {}
}
