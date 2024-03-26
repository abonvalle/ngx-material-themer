import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { VERSION } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemesService } from '../../shared/services/themes.service';
import { ConfigService } from '../shared/services/config.service';
import { ColorBrickComponent } from './theme/components/color-brick/color-brick.component';
import { ColorPaletteComponent } from './theme/components/color-palette/color-palette.component';
import {
  matAmberPalette,
  matBlueGreyPalette,
  matDeepPurplePalette,
  matGreenPalette,
  matIndigoPalette,
  matPinkPalette,
  matPurplePalette,
  matRedPalette
} from './theme/model';
import { SimpleThemeComponent } from './theme/simple-theme.component';
import { computeColor } from './util-colors';
@Component({
  selector: 'app-simple-themer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ColorBrickComponent,
    ColorPaletteComponent,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatSlideToggleModule,
    SimpleThemeComponent
  ],
  templateUrl: './simple-themer.component.html',
  styleUrl: './simple-themer.component.scss'
})
export class SimpleThemerComponent {
  @Input() appVersion = '';
  cssMode: 'CSS' | 'SASS' | 'LESS' = 'CSS';
  themes = [
    {
      value: 'd&a',
      label: 'Deep Purple & Amber',
      primary: matDeepPurplePalette,
      accent: matAmberPalette,
      warn: matRedPalette,
      firstColor: matDeepPurplePalette.find((c) => c.name === '500')?.hexCode,
      secondColor: matAmberPalette.find((c) => c.name === '500')?.hexCode
    },
    {
      value: 'i&p',
      label: 'Indigo & Pink',
      primary: matIndigoPalette,
      accent: matPinkPalette,
      warn: matRedPalette,
      firstColor: matIndigoPalette.find((c) => c.name === '500')?.hexCode,
      secondColor: matPinkPalette.find((c) => c.name === '500')?.hexCode
    },
    {
      value: 'p&bl',
      label: 'Pink & Blue-grey',
      primary: matPinkPalette,
      accent: matBlueGreyPalette,
      warn: matRedPalette,
      firstColor: matPinkPalette.find((c) => c.name === '500')?.hexCode,
      secondColor: matBlueGreyPalette.find((c) => c.name === '500')?.hexCode,
      dark: true
    },
    {
      value: 'p&g',
      label: 'Purple & Green',
      primary: matPurplePalette,
      accent: matGreenPalette,
      warn: matRedPalette,
      firstColor: matPurplePalette.find((c) => c.name === '500')?.hexCode,
      secondColor: matGreenPalette.find((c) => c.name === '500')?.hexCode,
      dark: true
    }
  ];
  currentTheme = signal(this.themes[0]);
  currentPrimaryPal = computed(() =>
    this.currentTheme().primary.map((c) => computeColor(c.hexCode, c.name, c.marks, '#ffffff', '#000000'))
  );
  currentAccentPal = computed(() =>
    this.currentTheme().accent.map((c) => computeColor(c.hexCode, c.name, c.marks, '#ffffff', '#000000'))
  );
  currentWarnPal = computed(() =>
    this.currentTheme().warn.map((c) => computeColor(c.hexCode, c.name, c.marks, '#ffffff', '#000000'))
  );
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
  selectPresetTheme(theme: any) {
    console.log('selectPresetTheme', theme.buttonColor);
    // const th = this.themes.find((theme) => theme.value === event.value);
    // if (th) {
    this.currentTheme.set(theme);
    // }
    // console.log('selectPresetTheme', event.value);
  }
}
