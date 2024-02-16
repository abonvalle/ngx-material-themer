import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { VERSION } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfigService } from '../shared/services/config.service';
import { ThemesService } from '../shared/services/themes.service';
import { ColorBrickComponent } from './theme/components/color-brick/color-brick.component';
import { ColorPaletteComponent } from './theme/components/color-palette/color-palette.component';
import { ThemeComponent } from './theme/theme.component';
@Component({
  selector: 'app-simple-themer',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ColorBrickComponent,
    ColorPaletteComponent,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatSlideToggleModule,
    ThemeComponent
  ],
  templateUrl: './simple-themer.component.html',
  styleUrl: './simple-themer.component.scss'
})
export class SimpleThemerComponent {
  @Input() appVersion = '';
  cssMode: 'CSS' | 'SASS' | 'LESS' = 'CSS';
  themes = [
    { value: 'd&a', label: 'Deep Purple & Amber', primary: '#673ab7', accent: '#ffc107', warn: '#f44336' },
    { value: 'i&p', label: 'Indigo & Pink', primary: '#3f51b5', accent: '#e91e63', warn: '#f44336' },
    { value: 'p&bl', label: 'Pink & Blue-grey', primary: '#e91e63', accent: '#607d8b', warn: '#f44336', dark: true },
    { value: 'p&g', label: 'Purple & Green', primary: '#9c27b0', accent: '#4caf50', warn: '#f44336', dark: true }
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
