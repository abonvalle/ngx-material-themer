import { DestroyRef, Injectable, Signal, computed, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ColorPickerConstants } from './color-picker.constants';

@Injectable({ providedIn: 'root' })
export class ColorPickerService {
  private _color = signal(this._colorPickerConstants.defaultColor);
  private _toggle = signal(false);
  private _position = signal(this._colorPickerConstants.defaultPosition);
  private _showTemplate = signal(this._colorPickerConstants.defaultShowTemplate);
  private _recentlyUsedColors = signal<string[]>([]);
  private _destroy = new Subject<void>();
  private _hasColorChanged = signal(false);
  private _colorChange = new Subject<string>();
  private _colorPickerClosed = new Subject<void>();
  constructor(
    private _destroyRef: DestroyRef,
    private _colorPickerConstants: ColorPickerConstants
  ) {
    const subscrt = this._colorChange.subscribe(() => {
      this._hasColorChanged.set(true);
    });
    this._destroyRef.onDestroy(() => {
      subscrt.unsubscribe();
      this._destroy.next();
    });
  }
  private set color(color: string) {
    this._colorChange.next(color);
    this._color.set(color);
  }
  get color(): Signal<string> {
    return computed(() => this._color());
  }
  set toggle(toggle: boolean) {
    this._toggle.set(toggle);
  }
  get toggle(): Signal<boolean> {
    return computed(() => this._toggle());
  }
  private set position(position: { top: string; left: string }) {
    this._position.set(position);
  }
  get position(): Signal<{ top: string; left: string }> {
    return computed(() => this._position());
  }
  private set showTemplate(showTemplate: boolean) {
    this._showTemplate.set(showTemplate);
  }
  get showTemplate(): Signal<boolean> {
    return computed(() => this._showTemplate());
  }
  private set recentlyUsedColors(colors: string[]) {
    this._recentlyUsedColors.set(colors);
  }
  get recentlyUsedColors(): Signal<string[]> {
    return computed(() => this._recentlyUsedColors());
  }
  updateColor(color: string) {
    if (color === this.color()) return;
    this.color = color;
  }
  addToRecentColors(color: string) {
    this._recentlyUsedColors.update((recentlyUsedColors) => {
      const index = recentlyUsedColors.indexOf(color);
      if (index !== -1) {
        recentlyUsedColors.splice(index, 1);
      }
      recentlyUsedColors.unshift(color);
      if (recentlyUsedColors.length > this._colorPickerConstants.maxRecentlyUsedColors) {
        recentlyUsedColors.pop();
      }
      return recentlyUsedColors;
    });
  }

  openColorPicker(
    color: string | null,
    pos: { x: number; y: number },
    showTemplate: boolean = this._colorPickerConstants.defaultShowTemplate
  ) {
    this.position = { top: `${pos.y}px`, left: `${pos.x}px` };
    this.showTemplate = showTemplate;
    this.toggle = true;
    if (color) this._color.set(color);
    return new Observable<string>((sub) => {
      const colorChange = this._colorChange.subscribe((color) => {
        sub.next(color);
      });
      const destroy = this._destroy.subscribe(() => {
        sub.complete();
        colorChange.unsubscribe();
        colorPickerClosed.unsubscribe();
        destroy.unsubscribe();
      });
      const colorPickerClosed = this._colorPickerClosed.subscribe(() => {
        sub.complete();
        colorPickerClosed.unsubscribe();
        colorChange.unsubscribe();
        destroy.unsubscribe();
      });
    });
  }
  closeColorPicker(toggle: boolean = false) {
    this._hasColorChanged() && this.addToRecentColors(this.color());
    this._colorPickerClosed.next();
    this.toggle = toggle;
    this.showTemplate = this._colorPickerConstants.defaultShowTemplate;
    this._color.set(this._colorPickerConstants.defaultColor);
    this.position = this._colorPickerConstants.defaultPosition;
    this._hasColorChanged.set(false);
  }
}
