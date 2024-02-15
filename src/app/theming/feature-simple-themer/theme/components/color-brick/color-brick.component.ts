import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  Output,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ColorPickerService } from '@app/color-picker/color-picker.service';

@Component({
  selector: 'app-color-brick',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  templateUrl: './color-brick.component.html',
  styleUrl: './color-brick.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorBrickComponent {
  @Input({ required: true }) color!: string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter();
  destroyRef = inject(DestroyRef);
  constructor(
    private _cdrRef: ChangeDetectorRef,
    private _colorPickerService: ColorPickerService
  ) {}

  setColor(color: string) {
    this.colorChange.emit(color);
    this._cdrRef.markForCheck();
  }
  openColorPicker(event: MouseEvent) {
    const colorChange = this._colorPickerService
      .openColorPicker(this.color, { x: event.x, y: event.y }, false)
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
