import { ElementRef, Injectable, WritableSignal, signal } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { Color, marks } from '@app/theming/feature-simple-themer/theme/model';
import packageJSON from '../../../../package.json';
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

  computeTheme() {
    const themes = this.themes();
    const theme = themes[0];
    const appVersion = packageJSON.version.slice(0, -packageJSON.version.lastIndexOf('.') + 1);
    const materialVersion = `${VERSION.major}.${VERSION.minor}`;
    const themeStr = `
    /** Theme generated by ngx Material Themer v${appVersion} using Angular Material v${materialVersion}
     *  This may not work for other versions of Angular Material
    */
    @use "@angular/material" as mat;
    @include mat.core();

    /** Theme variables */
    $light-text: ${theme.fontLight()};
    $dark-text: ${theme.fontDark()};
    $primary-palette: ${this.colorsToMatPalette(theme.primaryPal())};
    $accent-palette: ${this.colorsToMatPalette(theme.accentPal())};
    $warn-palette: ${this.colorsToMatPalette(theme.warnPal())};

    /** Theme configuration */
    $mat-theme-primary-palette: mat.define-palette($primary-palette,${this.getMarkedHue(theme.primaryPal())});
    $mat-theme-accent-palette: mat.define-palette($accent-palette,${this.getMarkedHue(theme.accentPal())});
    $mat-theme-warn-palette: mat.define-palette($warn-palette,${this.getMarkedHue(theme.warnPal())});
    $mat-typography: mat.define-typography-config();
    $my-custom-app-theme: mat.define-${theme.dark ? 'dark' : 'light'}-theme(
      (
        color: (
          primary: $mat-theme-primary-palette,
          accent: $mat-theme-accent-palette,
          warn: $mat-theme-warn-palette
        ),
        typography: $mat-typography,
        density: ${theme.density()}
      )
    );

    @include mat.all-component-themes($my-custom-app-theme);
    @include mat.typography-hierarchy($my-custom-app-theme);
    `;
    return themeStr;
  }

  colorsToMatPalette(colors: Color[]): string {
    const colorsStr: string[] = [];
    const contrasts: string[] = [];
    colors.map((color) => {
      colorsStr.push(`${color.name}: ${color.hexCode}`);
      contrasts.push(`${color.name}: ${color.contrastLight ? '$light-text' : '$dark-text'}`);
    });
    return `(
      ${colorsStr.join(',')}
      contrast: (
        ${contrasts.join(',')}
      )
    )`;
  }
  getMarkedHue(colors: Color[]): string {
    let defaultHue = '500';
    let textHue = '500';
    let lighterHue = '100';
    let darkerHue = '700';
    colors.forEach((color) => {
      if (color.marks.includes(marks.default)) {
        defaultHue = color.name;
      }
      if (color.marks.includes(marks.text)) {
        textHue = color.name;
      }
      if (color.marks.includes(marks.darker)) {
        darkerHue = color.name;
      }
      if (color.marks.includes(marks.lighter)) {
        lighterHue = color.name;
      }
    });
    return ` ${defaultHue}, ${textHue}, ${lighterHue}, ${darkerHue}`;
  }

  copyTheme() {
    navigator.clipboard.writeText(this.computeTheme());
  }

  downloadTheme() {
    const blob = new Blob([this.computeTheme()], { type: 'text/scss' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'styles.scss';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
