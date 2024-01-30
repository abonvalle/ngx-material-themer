import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  computed
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ColorBrickComponent } from '@features/color-brick/color-brick.component';
import { colorKeyTooltip } from '@models/color-key-tooltip.const';
import { SimplifiedPalette } from '@models/simplified/simplified-palette.interface';
import { HelpTooltipComponent } from '@modules/shared/help-tooltip/help-tooltip.component';

@Component({
  selector: 'app-simplified-palette',
  standalone: true,
  imports: [CommonModule, ColorBrickComponent, HelpTooltipComponent, TitleCasePipe],
  templateUrl: './simplified-palette.component.html',
  styleUrl: './simplified-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplifiedPaletteComponent {
  @Input({ required: true }) label: string = '';
  @Input() tooltip: string = '';
  @Input({ required: true }) colors!: SimplifiedPalette;
  @Output() colorsChange: EventEmitter<SimplifiedPalette> = new EventEmitter();
  constructor() {}

  onUpdateColors() {
    this.colorsChange.emit(this.colors);
  }
  getTooltip(color: string): string {
    //@ts-ignore
    return colorKeyTooltip[color] || '';
  }
}
