import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import { Color } from '@app/theming/feature-simple-themer/theme/model';
import { SimpleThemeComponent } from '../../feature-simple-themer/theme/simple-theme.component';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  darkMode: WritableSignal<boolean> = signal(false);
  themes: WritableSignal<SimpleThemeComponent[]> = signal([]);
  constructor() {
    effect(
      () => {
        console.warn('change in themes');
        this.updateThemes(this.themes());
      },
      { allowSignalWrites: true }
    );
  }

  updateThemes(themes: SimpleThemeComponent[]) {
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
  applyTheme(theme: SimpleThemeComponent) {
    const fonts = {
      dark: theme.fontDark(),
      light: theme.fontLight()
    };
    console.warn('applyTheme primary', theme.primaryPal);
    console.warn('applyTheme accent', theme.accentPal);
    console.warn('applyTheme warn', theme.warnPal);
    document.documentElement.style.setProperty(`--theme-density`, theme.density().toFixed(0));
    this.darkMode.set(theme.isDarkTheme());
    document.documentElement.classList.toggle('dark', theme.isDarkTheme());
    this.applyPalette('primary', theme.primaryPal(), fonts);
    this.applyPalette('accent', theme.accentPal(), fonts);
    this.applyPalette('warn', theme.warnPal(), fonts);
  }

  applyPalette(palName: string, pal: Color[], fonts: { dark: string; light: string }) {
    console.warn('applyPalette', palName, pal);
    pal?.forEach((color) => {
      document.documentElement.style.setProperty(`--theme-${palName}-${color.name}`, color.hexCode);
      document.documentElement.style.setProperty(
        `--theme-${palName}-contrast-${color.name}`,
        color.contrastLight ? fonts.light : fonts.dark
      );
    });
  }
}
