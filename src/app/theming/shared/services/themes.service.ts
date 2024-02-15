import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import { MaterialPalette } from '../../feature-simple-themer/theme/model/material-palette.interface';
import { ThemeComponent } from '../../feature-simple-themer/theme/theme.component';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  darkMode: WritableSignal<boolean> = signal(false);
  themes: WritableSignal<ThemeComponent[]> = signal([]);
  constructor() {
    effect(
      () => {
        console.warn('change in themes');
        this.updateThemes(this.themes());
      },
      { allowSignalWrites: true }
    );
  }

  addTheme(theme: ThemeComponent) {
    this.themes.update((themes) => [...themes, theme]);
  }
  removeTheme(theme: ThemeComponent) {
    this.themes.update((themes) => themes.filter((t) => t.guid !== theme.guid));
  }
  updateThemes(themes: ThemeComponent[]) {
    themes.forEach((themeC) => {
      this.applyTheme(themeC);
    });
    // colors.forEach((color) => {
    // document.documentElement.style.setProperty(`--theme-${theme}-${color.name}`, color.hex);
    // document.documentElement.style.setProperty(
    // `--theme-${theme}-contrast-${color.name}`,
    // color.darkContrast ? 'rgba(black, 0.87)' : 'white'
    // );
    // });
  }
  applyTheme(theme: ThemeComponent) {
    const fonts = {
      dark: theme.fontDark,
      light: theme.fontLight,
      isLight: theme.isLightTheme()
    };
    console.warn('applyTheme primary', theme.primaryPal);
    console.warn('applyTheme accent', theme.accentPal);
    console.warn('applyTheme warn', theme.warnPal);
    document.documentElement.style.setProperty(`--theme-density`, theme.density.toFixed(0));
    this.darkMode.set(theme.isLightTheme());
    document.documentElement.classList.toggle('dark', theme.isLightTheme());
    this.setMaterialPaletteColor('primary', theme.primaryPal, fonts);
    this.setMaterialPaletteColor('accent', theme.accentPal, fonts);
    this.setMaterialPaletteColor('warn', theme.warnPal, fonts);
  }
  setMaterialPaletteColor(
    palName: string,
    matPal: MaterialPalette,
    fonts: { dark: string; light: string; isLight: boolean }
  ) {
    Object.entries(matPal).forEach(([key, color]) => {
      if (typeof color !== 'string') {
        return;
      }
      document.documentElement.style.setProperty(`--theme-${palName}-${key}`, color);
      const fontColor = fonts.isLight ? fonts.light : fonts.dark;
      document.documentElement.style.setProperty(`--theme-${palName}-contrast-${key}`, fontColor);
    });
  }
}
