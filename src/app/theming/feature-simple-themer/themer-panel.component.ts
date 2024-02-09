import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { VERSION } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { ConfigService } from '../shared/services/config.service';
import { ThemesService } from '../shared/services/themes.service';
import { ColorBrickComponent } from './theme/components/color-brick/color-brick.component';
import { ColorPaletteComponent } from './theme/components/color-palette/color-palette.component';
import { ThemeComponent } from './theme/theme.component';
@Component({
  selector: 'app-themer-panel',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ColorBrickComponent,
    ColorPaletteComponent,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatSlideToggleModule,
    ThemeComponent
  ],
  templateUrl: './themer-panel.component.html',
  styleUrl: './themer-panel.component.scss'
})
export class ThemerPanelComponent {
  @Input() appVersion = '';
  secondeTheme = signal(false);
  cssMode: 'CSS' | 'SASS' | 'LESS' = 'CSS';
  themes = [
    { value: 'd&a', label: 'Deep Purple & Amber', primary: '#673ab7', secondary: '#ffc107' },
    { value: 'i&p', label: 'Indigo & Pink', primary: '#3f51b5', secondary: '#e91e63' },
    { value: 'p&bl', label: 'Pink & Blue-grey', primary: '#e91e63', secondary: '#607d8b', dark: true },
    { value: 'p&g', label: 'Purple & Green', primary: '#9c27b0', secondary: '#4caf50', dark: true }
  ];
  currentTheme = signal(this.themes[0]);
  isDarkMode = this._themeService.darkMode;
  hideHelpTooltips = this._configService.hideHelpTooltips;
  materialVersion = `${VERSION.major}.${VERSION.minor}`;
  constructor(
    public dialog: MatDialog,
    private _themeService: ThemesService,
    private _configService: ConfigService
  ) {}

  addSecondTheme() {
    this.secondeTheme.update((_) => true);
  }
  removeSecondTheme() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete second theme',
        msg: 'Its palettes & colors will be lost forever.',
        yes: 'Delete the theme',
        no: 'Cancel'
      },
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.warn('The dialog was closed', result);
      result && this.secondeTheme.update((_) => false);
    });
  }
  updateMode() {
    this._themeService.toggleDarkMode();
  }
  updateHideHelpTooltips() {
    this._configService.toggleHideHelpTooltips();
  }
  selectPresetTheme(event: MatChipListboxChange) {
    const th = this.themes.find((theme) => theme.value === event.value);
    if (th) {
      this.currentTheme.set(th);
    }
    console.log('selectPresetTheme', event.value);
  }
}

/** https://stackblitz.com/edit/angular-material-theming-playground?file=src%2Fapp%2Fapp.component.ts
 *  savePrimaryColor() {
    this.primaryColorPalette = computeColors(this.primaryColor);
    updateTheme(this.primaryColorPalette, 'primary');
  }

  saveAccentColor() {
    this.accentColorPalette = computeColors(this.accentColor);
    updateTheme(this.accentColorPalette, 'accent');
  }
}

function updateTheme(colors: Color[], theme: string) {
  colors.forEach(color => {
      document.documentElement.style.setProperty(
        `--theme-${theme}-${color.name}`,
        color.hex
      );
      document.documentElement.style.setProperty(
        `--theme-${theme}-contrast-${color.name}`,
        color.darkContrast ? 'rgba(black, 0.87)' : 'white'
      );
    });
}

function computeColors(hex: string): Color[] {
  return [
    getColorObject(tinycolor(hex).lighten(52), '50'),
    getColorObject(tinycolor(hex).lighten(37), '100'),
    getColorObject(tinycolor(hex).lighten(26), '200'),
    getColorObject(tinycolor(hex).lighten(12), '300'),
    getColorObject(tinycolor(hex).lighten(6), '400'),
    getColorObject(tinycolor(hex), '500'),
    getColorObject(tinycolor(hex).darken(6), '600'),
    getColorObject(tinycolor(hex).darken(12), '700'),
    getColorObject(tinycolor(hex).darken(18), '800'),
    getColorObject(tinycolor(hex).darken(24), '900'),
    getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
    getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
    getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
    getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
  ];
}

function getColorObject(value, name): Color {
  const c = tinycolor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}
 */
