import { Component, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorBrickComponent } from '@features/color-brick/color-brick.component';
import { ColorPaletteComponent } from '@features/color-palette/color-palette.component';
import { emptyPalette } from '@models/empty-palette.const';
import { MaterialPalette } from '@models/material/material-palette.interface';

const noPal: MaterialPalette = Object.assign({}, emptyPalette);

@Component({
  selector: 'app-theme-palette-mode',
  standalone: true,
  imports: [ColorBrickComponent, ColorPaletteComponent, MatCheckboxModule],
  templateUrl: './theme-palette-mode.component.html',
  styleUrl: './theme-palette-mode.component.scss'
})
export class ThemePaletteModeComponent {
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
