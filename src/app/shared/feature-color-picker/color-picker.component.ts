import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorPickerConstants } from './color-picker.constants';
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
  showTemplate = this._colorPickerService.showTemplate;
  recentlyUsedColors = this._colorPickerService.recentlyUsedColors;
  constructor(
    private _cdrRef: ChangeDetectorRef,
    private _colorPickerService: ColorPickerService,
    public colorPickerConstants: ColorPickerConstants
  ) {}

  setColor(color: string) {
    this._colorPickerService.updateColor(color);
    this._cdrRef.markForCheck();
  }
  @HostListener('document:wheel')
  @HostListener('document:scroll')
  @HostListener('document:touchmove', ['$event'])
  closeColorPicker($event?: MouseEvent | TouchEvent) {
    if (!this.toggle() || this.checkParentsElement($event?.srcElement as HTMLElement)) {
      return;
    }
    this._colorPickerService.closeColorPicker();
  }
  checkParentsElement(elt: HTMLElement, maxDepth: number = 5) {
    if (!elt) return false;
    let depth = 0;
    while (elt.parentElement && depth < maxDepth) {
      if (elt.parentElement?.nodeName === 'COLOR-PICKER') {
        return true;
      }
      elt = elt?.parentElement;
      depth++;
    }
    return false;
  }
  setToggle(toggle: boolean) {
    this._colorPickerService.toggle = toggle;
    !toggle && this._colorPickerService.closeColorPicker(toggle);
    // this._cdrRef.markForCheck();
  }
}
