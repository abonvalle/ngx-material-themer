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
import { MatMenuModule } from '@angular/material/menu';
import { ColorPickerModule } from 'ngx-color-picker';
import { hueKeysMark } from '../../model';

@Component({
  selector: 'app-color-tile',
  standalone: true,
  imports: [MatChipsModule, CdkDrag, MatMenuModule, ColorPickerModule],
  templateUrl: './color-tile.component.html',
  styleUrl: './color-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorTileComponent implements OnChanges {
  @Input({ required: true }) color!: string | null;
  _color: string = this.color ?? '';
  @Input({ required: true }) colorName!: string;
  @Input({ required: true }) marks: hueKeysMark[] = [];
  @Output() colorChange: EventEmitter<string | null> = new EventEmitter();
  constructor(private _cdrRef: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this._color = this.color ?? '';
    }
  }

  setColor(color: string | null) {
    // this.color = color;
    this.colorChange.emit(color === '' ? null : color);
    this._cdrRef.markForCheck();
  }
}
