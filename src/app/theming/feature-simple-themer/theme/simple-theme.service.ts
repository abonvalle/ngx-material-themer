import { Injectable, Signal, computed, signal } from '@angular/core';
import { Color } from './model';
import { SimpleThemeConstants } from './simple-theme.constants';

@Injectable({
  providedIn: 'root'
})
export class SimpleThemeService {
  private _isDarkTheme = signal(this._simpleThemeConstants.defaultIsDarkTheme);
  private _primaryPal = signal(this._simpleThemeConstants.defaultPrimaryPal);
  private _accentPal = signal(this._simpleThemeConstants.defaultAccentPal);
  private _warnPal = signal(this._simpleThemeConstants.defaultWarnPal);
  private _fontLight = signal(this._simpleThemeConstants.defaultFontLight);
  private _fontDark = signal(this._simpleThemeConstants.defaultFontDark);
  private _density = signal(this._simpleThemeConstants.defaultDensity);
  private _automaticContrast = signal(this._simpleThemeConstants.defaultAutomaticContrast);
  get isDarkTheme(): Signal<boolean> {
    return computed(() => this._isDarkTheme());
  }
  get primaryPal(): Signal<Color[]> {
    return computed(() => this._primaryPal());
  }
  get accentPal(): Signal<Color[]> {
    return computed(() => this._accentPal());
  }
  get warnPal(): Signal<Color[]> {
    return computed(() => this._warnPal());
  }
  get fontLight(): Signal<string> {
    return computed(() => this._fontLight());
  }
  get fontDark(): Signal<string> {
    return computed(() => this._fontDark());
  }
  get density(): Signal<number> {
    return computed(() => this._density());
  }
  get automaticContrast(): Signal<boolean> {
    return computed(() => this._automaticContrast());
  }
  set isDarkTheme(isDarkTheme: boolean) {
    this._isDarkTheme.set(isDarkTheme);
  }
  set primaryPal(primaryPal: Color[]) {
    this._primaryPal.set(primaryPal);
  }
  set accentPal(accentPal: Color[]) {
    this._accentPal.set(accentPal);
  }
  set warnPal(warnPal: Color[]) {
    this._warnPal.set(warnPal);
  }
  set fontLight(fontLight: string) {
    this._fontLight.set(fontLight);
  }
  set fontDark(fontDark: string) {
    this._fontDark.set(fontDark);
  }
  set density(density: number) {
    this._density.set(density);
  }
  set automaticContrast(automaticContrast: boolean) {
    this._automaticContrast.set(automaticContrast);
  }
  constructor(private _simpleThemeConstants: SimpleThemeConstants) {}
}
