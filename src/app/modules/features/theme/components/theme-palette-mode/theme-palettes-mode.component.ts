import { Component, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorPaletteComponent } from '@features/color-palette/color-palette.component';
import { ColorBrickComponent } from '@features/legacy/color-brick/color-brick.component';
import { emptyPalette } from '@models/empty-palette.const';
import { MaterialPalette } from '@models/material/material-palette.interface';

const noPal: MaterialPalette = Object.assign({}, emptyPalette);

@Component({
  selector: 'app-theme-palettes-mode',
  standalone: true,
  imports: [ColorBrickComponent, ColorPaletteComponent, MatCheckboxModule],
  templateUrl: './theme-palettes-mode.component.html',
  styleUrl: './theme-palettes-mode.component.scss'
})
export class ThemePalettesModeComponent {
  @Input({ required: true }) primaryPal: WritableSignal<MaterialPalette> = signal(noPal);
  @Input({ required: true }) accentPal: WritableSignal<MaterialPalette> = signal(noPal);
  @Input({ required: true }) warnPal: WritableSignal<MaterialPalette> = signal(noPal);
  @Input({ required: true }) fontLight: string = '';
  @Input({ required: true }) fontDark: string = '';
  @Input({ required: true }) automaticContrast: boolean = false;
  @Output() primaryPalChange = new EventEmitter();
  @Output() accentPalChange = new EventEmitter();
  @Output() warnPalChange = new EventEmitter();

  updatePalette(
    paletteEvtEmitter: EventEmitter<WritableSignal<MaterialPalette>>,
    palette: WritableSignal<MaterialPalette>
  ) {
    paletteEvtEmitter.emit(palette);
  }
}
