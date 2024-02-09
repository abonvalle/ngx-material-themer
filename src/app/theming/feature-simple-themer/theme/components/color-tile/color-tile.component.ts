import { CdkDrag } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { HelpTooltipComponent } from '@app//theming/shared/help-tooltip/help-tooltip.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { marks } from '../../model';
import { MATERIAL_COLORS } from '../../model/material-colors.const';

@Component({
  selector: 'app-color-tile',
  standalone: true,
  imports: [MatChipsModule, CdkDrag, MatMenuModule, ColorPickerModule, MatExpansionModule, HelpTooltipComponent],
  templateUrl: './color-tile.component.html',
  styleUrl: './color-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorTileComponent implements OnChanges {
  @Input({ required: true }) color!: string | null;
  _color: string = this.color ?? '';
  @Input({ required: true }) marks: marks[] = [];
  @Input({ required: true }) label!: string;
  @Input() text!: string;
  @Input() textColor!: string;
  @Output() colorChange: EventEmitter<string | null> = new EventEmitter();
  matColors = MATERIAL_COLORS;
  constructor(private _cdrRef: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      console.warn('color change', this.color);
      this._color = this.color ?? '';
    }
  }

  setColor(color: string | null) {
    this.colorChange.emit(color === '' ? null : color);
    this._cdrRef.markForCheck();
  }
}
