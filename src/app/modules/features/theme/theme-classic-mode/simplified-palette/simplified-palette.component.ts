import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  computed
} from '@angular/core';
import { ColorBrickComponent } from '@features/color-brick/color-brick.component';
import { SimplifiedPalette } from '@models/simplified/simplified-palette.interface';

@Component({
  selector: 'app-simplified-palette',
  standalone: true,
  imports: [CommonModule, ColorBrickComponent],
  templateUrl: './simplified-palette.component.html',
  styleUrl: './simplified-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplifiedPaletteComponent {
  @Input({ required: true }) colors!: SimplifiedPalette;
  @Output() colorsChange: EventEmitter<SimplifiedPalette> = new EventEmitter();

  onUpdateColors() {
    this.colorsChange.emit(this.colors);
  }
  constructor() {}
}
