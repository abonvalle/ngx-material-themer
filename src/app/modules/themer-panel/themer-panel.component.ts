import { Component, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { ColorBrickComponent } from '../color-brick/color-brick.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeModeService } from '../theme-mode.service';

@Component({
  selector: 'app-themer-panel',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ColorPickerComponent,
    ColorBrickComponent,
    ColorPaletteComponent,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatSlideToggleModule,
  ],
  templateUrl: './themer-panel.component.html',
  styleUrl: './themer-panel.component.scss',
})
export class ThemerPanelComponent {
  darkModePal = signal(false);
  cssMode: 'CSS' | 'SASS' | 'LESS' = 'CSS';
  themes = [
    { value: 'd&a', label: 'Deep Purple & Amber' },
    { value: 'dark', label: 'Indigo & Pink' },
    { value: 'light', label: 'Pink & Blue-grey' },
    { value: 'purple', label: 'Purple & Green' },
  ];
  isDarkMode = this._themeModeService.isDarkMode;
  constructor(
    public dialog: MatDialog,
    private _themeModeService: ThemeModeService
  ) {}

  addDarkModePal() {
    this.darkModePal.update((_) => true);
  }
  removeDarkModePal() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete dark mode palette',
        msg: 'Its colors will be lost forever.',
        yes: 'Delete the palette',
        no: 'Cancel',
      },
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.warn('The dialog was closed', result);
      result && this.darkModePal.update((_) => false);
    });
  }
  updateMode() {
    this._themeModeService.toggleThemeMode();
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
