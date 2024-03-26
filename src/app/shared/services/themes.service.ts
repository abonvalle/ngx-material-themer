import { ElementRef, Injectable, WritableSignal, signal } from '@angular/core';
import { Color } from '@app/theming/feature-simple-themer/theme/model';
import { SimpleThemeComponent } from '../../theming/feature-simple-themer/theme/simple-theme.component';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  darkMode: WritableSignal<boolean> = signal(false);
  themes: WritableSignal<SimpleThemeComponent[]> = signal([]);
  constructor() {
    // effect(
    //   () => {
    //     // console.warn('change in themes');
    //     this.updateThemes(this.themes());
    //   },
    //   { allowSignalWrites: true }
    // );
  }

  updateThemes(themes: SimpleThemeComponent[]) {
    // this.themes.set(themes);
    // themes.forEach((themeC) => {
    // this.applyTheme(themeC);
    // });
    // colors.forEach((color) => {
    // document.documentElement.style.setProperty(`--theme-${theme}-${color.name}`, color.hex);
    // document.documentElement.style.setProperty(
    // `--theme-${theme}-contrast-${color.name}`,
    // color.darkContrast ? 'rgba(black, 0.87)' : 'white'
    // );
    // });
  }

  setTheme(theme: SimpleThemeComponent) {
    this.themes.set([theme]);
  }
  applyThemes(elementRef: ElementRef) {
    this.themes().forEach((theme) => {
      const fonts = {
        dark: theme.fontDark(),
        light: theme.fontLight()
      };
      // console.warn('applyTheme primary', theme.primaryPal);
      // console.warn('applyTheme accent', theme.accentPal);
      // console.warn('applyTheme warn', theme.warnPal);
      elementRef.nativeElement.style.setProperty(`--theme-density`, theme.density().toFixed(0));
      // this.darkMode.set(theme.isDarkTheme());
      elementRef.nativeElement.classList.toggle('dark', theme.isDarkTheme());
      this.applyPalette(elementRef, 'primary', theme.primaryPal(), fonts);
      this.applyPalette(elementRef, 'accent', theme.accentPal(), fonts);
      this.applyPalette(elementRef, 'warn', theme.warnPal(), fonts);
    });
  }

  applyPalette(elementRef: ElementRef, palName: string, pal: Color[], fonts: { dark: string; light: string }) {
    // console.warn('applyPalette', palName, pal);
    pal?.forEach((color) => {
      elementRef.nativeElement.style.setProperty(`--theme-${palName}-${color.name}`, color.hexCode);
      elementRef.nativeElement.style.setProperty(
        `--theme-${palName}-contrast-${color.name}`,
        color.contrastLight ? fonts.light : fonts.dark
      );
    });
  }
}
