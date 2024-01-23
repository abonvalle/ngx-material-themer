import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { ColorBrickComponent } from '../color-brick/color-brick.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  templateUrl: './themer-panel.component.html',
  styleUrl: './themer-panel.component.scss',
})
export class ThemerPanelComponent {
  themes = [
    { value: 'd&a', label: 'Deep Purple & Amber' },
    { value: 'dark', label: 'Indigo & Pink' },
    { value: 'light', label: 'Pink & Blue-grey' },
    { value: 'purple', label: 'Purple & Green' },
    { value: 'custom', label: 'Custom' },
  ];
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
