import { Component, DestroyRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { ThemesService } from '../../../shared/services/themes.service';
import { HelpTooltipComponent } from '../../shared/help-tooltip/help-tooltip.component';
import { ColorBrickComponent } from './components/color-brick/color-brick.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { Color } from './model';
import { SimpleThemeService } from './simple-theme.service';

@Component({
  selector: 'app-simple-theme',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ColorPaletteComponent,
    MatIconModule,
    MatSlideToggle,
    ColorBrickComponent,
    MatCheckboxModule,
    HelpTooltipComponent,
    MatSliderModule
  ],
  templateUrl: './simple-theme.component.html',
  styleUrl: './simple-theme.component.scss'
})
export class SimpleThemeComponent implements OnChanges {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) primary!: Color[];
  @Input({ required: true }) accent!: Color[];
  @Input({ required: true }) warn!: Color[];
  @Input() dark: boolean = false;
  isDarkTheme = this._simpleThemeService.isDarkTheme;
  primaryPal = this._simpleThemeService.primaryPal;
  accentPal = this._simpleThemeService.accentPal;
  warnPal = this._simpleThemeService.warnPal;
  fontLight = this._simpleThemeService.fontLight;
  fontDark = this._simpleThemeService.fontDark;
  density = this._simpleThemeService.density;
  automaticContrast = this._simpleThemeService.automaticContrast;
  constructor(
    private _destroyRef: DestroyRef,
    private _themesService: ThemesService,
    private _simpleThemeService: SimpleThemeService
  ) {
    this.primary && (this._simpleThemeService.primaryPal = this.primary);
    this.accent && (this._simpleThemeService.accentPal = this.accent);
    this.warn && (this._simpleThemeService.warnPal = this.warn);
    console.log('SimpleThemeComponent', this.primary, this.accent, this.warn, this.dark);
    console.log(
      'SimpleThemeComponent',
      this._simpleThemeService.primaryPal(),
      this._simpleThemeService.accentPal(),
      this._simpleThemeService.warnPal(),
      this._simpleThemeService.isDarkTheme()
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dark']) {
      this._simpleThemeService.isDarkTheme = this.dark;
    }
    if (changes['primary'] && this.primary) {
      this._simpleThemeService.primaryPal = this.primary;
    }
    if (changes['accent'] && this.accent) {
      this._simpleThemeService.accentPal = this.accent;
    }
    if (changes['warn'] && this.warn) {
      this._simpleThemeService.warnPal = this.warn;
    }
    if (changes['primary'] || changes['accent'] || changes['warn'] || changes['dark']) {
      this._themesService.setTheme(this);
    }
  }
  updateTheme(value: MatSlideToggleChange) {
    this._simpleThemeService.isDarkTheme = value.checked;
  }
  updatePrimaryPalette(pal: Color[]) {
    this._simpleThemeService.primaryPal = pal;
    this._themesService.setTheme(this);
  }
  updateAccentPalette(pal: Color[]) {
    this._simpleThemeService.accentPal = pal;
    this._themesService.setTheme(this);
  }
  updateWarnPalette(pal: Color[]) {
    this._simpleThemeService.warnPal = pal;
    this._themesService.setTheme(this);
  }
  updateName(inptEvt: Event) {}
  updateLightFont(color: string) {
    this._simpleThemeService.fontLight = color;
    this._themesService.setTheme(this);
  }
  updateDarkFont(color: string) {
    this._simpleThemeService.fontDark = color;
    this._themesService.setTheme(this);
  }
  updateDensity(value: number) {
    this._simpleThemeService.density = value;
    this._themesService.setTheme(this);
  }
}
