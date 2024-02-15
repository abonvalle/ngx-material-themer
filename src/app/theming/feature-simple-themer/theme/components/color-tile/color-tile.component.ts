import { CdkDrag } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { HelpTooltipComponent } from '@app//theming/shared/help-tooltip/help-tooltip.component';
import { ColorPickerService } from '@app/color-picker/color-picker.service';
import { marks } from '../../model';

@Component({
  selector: 'app-color-tile',
  standalone: true,
  imports: [MatChipsModule, CdkDrag, MatMenuModule, MatExpansionModule, HelpTooltipComponent],
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
  destroyRef = inject(DestroyRef);
  constructor(
    private _cdrRef: ChangeDetectorRef,
    private _colorPickerService: ColorPickerService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this._color = this.color ?? '';
    }
  }

  setColor(color: string | null) {
    this.colorChange.emit(color === '' ? null : color);
    this._cdrRef.markForCheck();
  }
  openColorPicker(event: MouseEvent) {
    const colorChange = this._colorPickerService
      .openColorPicker(this.color, { x: event.x, y: event.y })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (value) => {
          this.setColor(value);
        },
        complete: () => {
          colorChange.unsubscribe();
        },
        error: (err) => {
          console.error('error', err);
          colorChange.unsubscribe();
        }
      });
  }
}
