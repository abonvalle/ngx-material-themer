import { Component, DestroyRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ColorBrickComponent } from '@features/legacy/color-brick/color-brick.component';
import { ThemeClassicModeComponent } from '@features/legacy/theme-classic-mode/theme-classic-mode.component';
import { ColorPaletteComponent } from '@features/theme/components/color-palette/color-palette.component';
import { emptyPalette } from '@models/empty-palette.const';
import { MaterialPalette } from '@models/material/material-palette.interface';
import { HelpTooltipComponent } from '@modules/shared/help-tooltip/help-tooltip.component';
import { PalettesService } from '@modules/shared/services/palettes.service';
import { ThemesService } from '@modules/shared/services/themes.service';
import { ThemePalettesModeComponent } from '../legacy/theme-palette-mode/theme-palettes-mode.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ColorPaletteComponent,
    MatIconModule,
    MatSlideToggle,
    ColorBrickComponent,
    MatCheckboxModule,
    HelpTooltipComponent,
    ThemePalettesModeComponent,
    ThemeClassicModeComponent
  ],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent implements OnChanges {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) label: string = '';
  @Output() nameChange = new EventEmitter<string>();
  guid = Math.random().toString(36).substring(2);
  isLightTheme = signal(false);
  primaryPal: MaterialPalette = Object.assign({}, emptyPalette);
  accentPal: MaterialPalette = Object.assign({}, emptyPalette);
  warnPal: MaterialPalette = Object.assign({}, emptyPalette);

  fontLight = '';
  fontDark = '';
  automaticContrast = signal(true);
  isPalMode = signal(false);

  constructor(
    private _destroyRef: DestroyRef,
    private _themesService: ThemesService,
    private _paletteService: PalettesService
  ) {
    this._themesService.addTheme(this);
    this._destroyRef.onDestroy(() => {
      this._themesService.removeTheme(this);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['primaryPal'] ||
      changes['accentPal'] ||
      changes['warnPal'] ||
      changes['isLightTheme'] ||
      changes['fontLight'] ||
      changes['fontDark']
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
    this.isLightTheme.set(value.checked);
  }
  updatePaletteMode(value: MatSlideToggleChange) {
    this.isPalMode.set(value.checked);
  }
  updatePalette(pal: MaterialPalette) {
    console.warn(pal);
  }
}
