import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-color-brick',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, ColorPickerModule],
  templateUrl: './color-brick.component.html',
  styleUrl: './color-brick.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorBrickComponent {
  @Input({ required: true }) color!: string;
  @Input() contrasts!: { dark?: string; light?: string };
  @Output() colorChange: EventEmitter<string> = new EventEmitter();
  @Output() contrastsChange: EventEmitter<{ dark?: string; light?: string }> = new EventEmitter();
  constructor(private _cdrRef: ChangeDetectorRef) {}
  editColor(event: Event) {
    event.stopPropagation();
    // this._toolPanelService.currentElement.set(this);
  }
  setColor(color: string) {
    this.colorChange.emit(color);
    this._cdrRef.markForCheck();
  }
  setContrasts(contrasts: { dark?: string; light?: string }) {
    this.contrasts = contrasts;
    this.contrastsChange.emit(this.contrasts);
    this._cdrRef.markForCheck();
  }
}
