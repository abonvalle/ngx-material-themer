import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  WritableSignal,
  computed,
  effect,
  input,
  signal
} from '@angular/core';
import { SimplifiedPalette } from '@models/simplified/simplified-palette.interface';
import { SimplifiedPaletteComponent } from './simplified-palette/simplified-palette.component';
import { emptyPalette } from '@models/empty-palette.const';
import { PaletteService } from '@modules/services/palette.service';
import { MaterialPalette } from '@models/material/material-palette.interface';
import { emptySimplePalette } from '@models/empty-simple-palette.const';

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

  constructor(private _paletteService: PaletteService) {}
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
