import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorBrickComponent } from '@features/theme/components/color-brick/color-brick.component';
import { colorKeyTooltip } from '@models/color-key-tooltip.const';
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
  @Input({ required: true }) colors!: any;
  @Output() colorsChange: EventEmitter<any> = new EventEmitter();
  constructor() {}

  onUpdateColors() {
    this.colorsChange.emit(this.colors);
  }
  getTooltip(color: string): string {
    //@ts-ignore
    return colorKeyTooltip[color] || '';
  }
}
