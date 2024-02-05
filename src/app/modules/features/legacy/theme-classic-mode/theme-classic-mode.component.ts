import { Component, EventEmitter, Input, Output, WritableSignal } from '@angular/core';
import { MaterialPalette } from '@models/material/material-palette.interface';
import { PalettesService } from '@modules/shared/services/palettes.service';
import { SimplifiedPaletteComponent } from '../simplified-palette/simplified-palette.component';

const noPal: any = Object.assign({});

@Component({
  selector: 'app-theme-classic-mode',
  standalone: true,
  imports: [SimplifiedPaletteComponent],
  templateUrl: './theme-classic-mode.component.html',
  styleUrl: './theme-classic-mode.component.scss'
})
export class ThemeClassicModeComponent {
  @Input({ required: true }) primaryPal: any = noPal;
  @Input({ required: true }) accentPal: any = noPal;
  @Input({ required: true }) warnPal: any = noPal;
  @Input({ required: true }) fontLight: string = '';
  @Input({ required: true }) fontDark: string = '';
  @Input({ required: true }) automaticContrast: boolean = false;
  @Output() primaryPalChange: EventEmitter<any> = new EventEmitter();
  @Output() accentPalChange: EventEmitter<any> = new EventEmitter();
  @Output() warnPalChange: EventEmitter<any> = new EventEmitter();

  constructor(private _paletteService: PalettesService) {}
  updatePalette(
    paletteEvtEmitter: EventEmitter<WritableSignal<MaterialPalette>>,
    palette: WritableSignal<MaterialPalette>
  ) {
    paletteEvtEmitter.emit(palette);
  }
  updatePal(simplPal: any, palChange: EventEmitter<any>) {
    palChange.emit(simplPal);
  }
}
