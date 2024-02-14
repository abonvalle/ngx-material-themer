import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MATERIAL_COLORS } from '@models/material-colors.const';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorPickerService } from './color-picker.service';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, ColorPickerModule, MatExpansionModule, MatTooltipModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent {
  color = this._colorPickerService.color;
  toggle = this._colorPickerService.toggle;
  position = this._colorPickerService.position;
  matColors = MATERIAL_COLORS;
  constructor(
    private _cdrRef: ChangeDetectorRef,
    private _colorPickerService: ColorPickerService
  ) {}

  setColor(color: string) {
    this._colorPickerService.color = color;
    this._cdrRef.markForCheck();
  }
  setToggle(toggle: boolean) {
    !toggle && this._colorPickerService.closeColorPicker();
    // this._cdrRef.markForCheck();
  }
}
