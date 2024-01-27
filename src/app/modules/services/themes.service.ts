import { Injectable, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { Theme } from '../../../models/theme.interface';
import { ThemeComponent } from '@features/theme/theme.component';
import { Palette } from '@models/palette.interface';
import { MaterialPalette } from '@models/material/material-palette.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  darkMode: WritableSignal<boolean> = signal(false);

  themes: WritableSignal<ThemeComponent[]> = signal([]);
  constructor() {
    effect(() => {
      console.warn('change in themes');
      this.updateThemes(this.themes());
    });
  }
  toggleDarkMode() {
    this.darkMode.update((mode) => !mode);
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
    this.setMaterialPaletteColor(theme.primaryPal(), fonts);
    this.setMaterialPaletteColor(theme.accentPal(), fonts);
    this.setMaterialPaletteColor(theme.warnPal(), fonts);
  }
  setMaterialPaletteColor(matPal: Palette, fonts: { dark: string; light: string; isLight: boolean }) {
    Object.entries(matPal.colors).forEach(([key, color]) => {
      if (typeof color !== 'string') {
        return;
      }
      document.documentElement.style.setProperty(`--theme-${matPal.name}-${key}`, color);
      const fontColor = fonts.isLight ? fonts.light : fonts.dark;
      document.documentElement.style.setProperty(`--theme-${matPal.name}-contrast-${key}`, fontColor);
    });
  }
}
