import { Component, EventEmitter, Input, Output, WritableSignal } from '@angular/core';
import { SimplifiedPalette } from '@features/legacy/simplified/simplified-palette.interface';
import { emptySimplePalette } from '@models/empty-simple-palette.const';
import { MaterialPalette } from '@models/material/material-palette.interface';
import { PalettesService } from '@modules/services/palettes.service';
import { SimplifiedPaletteComponent } from '../simplified-palette/simplified-palette.component';

const noPal: SimplifiedPalette = Object.assign({}, emptySimplePalette);

@Component({
  selector: 'app-theme-classic-mode',
  standalone: true,
  imports: [SimplifiedPaletteComponent],
  templateUrl: './theme-classic-mode.component.html',
  styleUrl: './theme-classic-mode.component.scss'
})
export class ThemeClassicModeComponent {
  @Input({ required: true }) primaryPal: SimplifiedPalette = noPal;
  @Input({ required: true }) accentPal: SimplifiedPalette = noPal;
  @Input({ required: true }) warnPal: SimplifiedPalette = noPal;
  @Input({ required: true }) fontLight: string = '';
  @Input({ required: true }) fontDark: string = '';
  @Input({ required: true }) automaticContrast: boolean = false;
  @Output() primaryPalChange: EventEmitter<SimplifiedPalette> = new EventEmitter();
  @Output() accentPalChange: EventEmitter<SimplifiedPalette> = new EventEmitter();
  @Output() warnPalChange: EventEmitter<SimplifiedPalette> = new EventEmitter();

  constructor(private _paletteService: PalettesService) {}
  updatePalette(
    paletteEvtEmitter: EventEmitter<WritableSignal<MaterialPalette>>,
    palette: WritableSignal<MaterialPalette>
  ) {
    paletteEvtEmitter.emit(palette);
  }
  updatePal(simplPal: SimplifiedPalette, palChange: EventEmitter<SimplifiedPalette>) {
    palChange.emit(simplPal);
  }
}
