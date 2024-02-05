import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorBrickComponent } from '@features/legacy/color-brick/color-brick.component';
import { ColorPaletteComponent } from '@features/theme/components/color-palette/color-palette.component';
import { emptyPalette } from '@models/empty-palette.const';
import { MaterialPalette } from '@models/material/material-palette.interface';

@Component({
  selector: 'app-theme-palettes-mode',
  standalone: true,
  imports: [ColorBrickComponent, ColorPaletteComponent, MatCheckboxModule],
  templateUrl: './theme-palettes-mode.component.html',
  styleUrl: './theme-palettes-mode.component.scss'
})
export class ThemePalettesModeComponent {
  @Input({ required: true }) primaryPal: MaterialPalette = Object.assign({}, emptyPalette);
  @Input({ required: true }) accentPal: MaterialPalette = Object.assign({}, emptyPalette);
  @Input({ required: true }) warnPal: MaterialPalette = Object.assign({}, emptyPalette);
  @Input({ required: true }) fontLight: string = '';
  @Input({ required: true }) fontDark: string = '';
  @Input({ required: true }) automaticContrast: boolean = false;
  @Output() primaryPalChange = new EventEmitter();
  @Output() accentPalChange = new EventEmitter();
  @Output() warnPalChange = new EventEmitter();

  updatePalette(paletteEvtEmitter: EventEmitter<MaterialPalette>, palette: MaterialPalette) {
    paletteEvtEmitter.emit(palette);
  }
}
