import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { VERSION } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { ThemesService } from '../shared/services/themes.service';
import { SimpleThemerComponent } from './feature-simple-themer/simple-themer.component';
import {
  matAmberPalette,
  matBlueGreyPalette,
  matDeepPurplePalette,
  matGreenPalette,
  matIndigoPalette,
  matPinkPalette,
  matPurplePalette,
  matRedPalette
} from './model';
import { PresetTheme } from './model/preset-theme.interface';
import { ConfigService } from './shared/services/config.service';

@Component({
  selector: 'app-theming',
  standalone: true,
  imports: [
    CommonModule,
    SimpleThemerComponent,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSlideToggleModule
  ],
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.scss'
})
export class ThemingComponent {
  @Input() appVersion = '';
  materialVersion = `${VERSION.major}.${VERSION.minor}`;
  isDarkMode = this._themeService.darkMode;
  hideHelpTooltips = this._configService.hideHelpTooltips;
  themes: PresetTheme[] = [
    {
      value: 'd&a',
      label: 'Deep Purple & Amber',
      primary: matDeepPurplePalette,
      accent: matAmberPalette,
      warn: matRedPalette,
      firstColor: matDeepPurplePalette.find((c) => c.name === '500')?.hexCode ?? '',
      secondColor: matAmberPalette.find((c) => c.name === '500')?.hexCode ?? ''
    },
    {
      value: 'i&p',
      label: 'Indigo & Pink',
      primary: matIndigoPalette,
      accent: matPinkPalette,
      warn: matRedPalette,
      firstColor: matIndigoPalette.find((c) => c.name === '500')?.hexCode ?? '',
      secondColor: matPinkPalette.find((c) => c.name === '500')?.hexCode ?? ''
    },
    {
      value: 'p&bl',
      label: 'Pink & Blue-grey',
      primary: matPinkPalette,
      accent: matBlueGreyPalette,
      warn: matRedPalette,
      firstColor: matPinkPalette.find((c) => c.name === '500')?.hexCode ?? '',
      secondColor: matBlueGreyPalette.find((c) => c.name === '500')?.hexCode ?? '',
      dark: true
    },
    {
      value: 'p&g',
      label: 'Purple & Green',
      primary: matPurplePalette,
      accent: matGreenPalette,
      warn: matRedPalette,
      firstColor: matPurplePalette.find((c) => c.name === '500')?.hexCode ?? '',
      secondColor: matGreenPalette.find((c) => c.name === '500')?.hexCode ?? '',
      dark: true
    }
  ];
  currentTheme = signal(this.themes[0]);
  constructor(
    private _themeService: ThemesService,
    private _configService: ConfigService
  ) {}

  downloadStyefile() {
    this._themeService.downloadTheme();
  }
  copyStyefile() {
    this._themeService.copyTheme();
  }
  updateHideHelpTooltips() {
    this._configService.toggleHideHelpTooltips();
  }
  selectPresetTheme(theme: any) {
    console.log('selectPresetTheme', theme.buttonColor);
    this.currentTheme.set(theme);
  }
}
