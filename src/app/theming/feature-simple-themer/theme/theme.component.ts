import { Component, DestroyRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { HelpTooltipComponent } from '../../shared/help-tooltip/help-tooltip.component';
import { ThemesService } from '../../shared/services/themes.service';
import { ColorBrickComponent } from './components/color-brick/color-brick.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { Color } from './model';
import { emptyMaterialPalette } from './model/empty-material-palette.const';
import { MaterialColors } from './model/material-colors.interface';
import { MaterialPalette } from './model/material-palette.interface';

@Component({
  selector: 'app-theme',
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
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent implements OnChanges {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) label: string = '';
  @Input() primary: string | null = null;
  @Input() accent: string | null = null;
  @Input() warn: string | null = '#f44336';
  @Input() dark: boolean = false;

  @Output() nameChange = new EventEmitter<string>();
  guid = Math.random().toString(36).substring(2);
  isLightTheme = signal(!this.dark);
  primaryPal: MaterialPalette = Object.assign({}, emptyMaterialPalette);
  accentPal: MaterialPalette = Object.assign({}, emptyMaterialPalette);
  warnPal: MaterialPalette = Object.assign({}, emptyMaterialPalette);
  fontLight = '#ffffff';
  fontDark = '#000000';
  density: number = 0;
  automaticContrast = signal(true);
  constructor(
    private _destroyRef: DestroyRef,
    private _themesService: ThemesService
  ) {
    this._themesService.addTheme(this);
    this._destroyRef.onDestroy(() => {
      this._themesService.removeTheme(this);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dark']) {
      this.isLightTheme.set(!this.dark);
    }
    if (
      changes['primaryPal'] ||
      changes['accentPal'] ||
      changes['warnPal'] ||
      changes['isLightTheme'] ||
      changes['fontLight'] ||
      changes['fontDark'] ||
      changes['primary'] ||
      changes['secondary'] ||
      changes['dark']
    ) {
      console.log('update in theme');
      this._themesService.applyTheme(this);
    }
  }
  updateName(inptEvent: Event) {
    const name = (<HTMLInputElement>inptEvent?.target)?.value;
    this.nameChange.emit(name);
  }
  updateTheme(value: MatSlideToggleChange) {
    this.isLightTheme.set(!value.checked);
  }
  updatePalette(pal: Color[], currentPal: string) {
    console.log('updatePalette', pal, currentPal);
    // todo no pal dircelty in themes, on changes update theme object
    // currentPal = pal;
    if (currentPal === 'primaryPal') {
      this.primaryPal = this.computePal(pal);
    } else if (currentPal === 'accentPal') {
      this.accentPal = this.computePal(pal);
    } else if (currentPal === 'warnPal') {
      this.warnPal = this.computePal(pal);
    }
    this._themesService.applyTheme(this);
  }
  computePal(pal: Color[]): MaterialPalette {
    const materialPal: MaterialPalette = Object.assign({}, emptyMaterialPalette);
    pal.forEach((color) => {
      const hue = color.name;
      materialPal[hue as keyof MaterialColors] = color.hexCode;
    });
    return materialPal;
  }
}
