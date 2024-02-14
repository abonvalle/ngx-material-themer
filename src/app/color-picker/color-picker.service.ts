import { DestroyRef, Injectable, Signal, computed, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ColorPickerService {
  private _color = signal('#ffffff');
  private _toggle = signal(false);
  private _position = signal({ top: '0px', left: '0px' });
  private _destroy = new Subject<void>();

  colorChange = new Subject<string>();
  colorPickerClosed = new Subject<void>();
  constructor(private _destroyRef: DestroyRef) {
    this._destroyRef.onDestroy(() => {
      this._destroy.next();
    });
  }
  set color(color: string) {
    this.colorChange.next(color);
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
  set position(position: { top: string; left: string }) {
    this._position.set(position);
  }
  get position(): Signal<{ top: string; left: string }> {
    return computed(() => this._position());
  }
  openColorPicker(pos: { x: number; y: number }) {
    this.toggle = true;
    this.position = { top: `${pos.y}px`, left: `${pos.x}px` };
    return new Observable<string>((sub) => {
      const colorChange = this.colorChange.subscribe((color) => {
        sub.next(color);
      });
      const destroy = this._destroy.subscribe(() => {
        sub.complete();
        colorChange.unsubscribe();
        colorPickerClosed.unsubscribe();
        destroy.unsubscribe();
      });
      const colorPickerClosed = this.colorPickerClosed.subscribe(() => {
        sub.complete();
        colorPickerClosed.unsubscribe();
        colorChange.unsubscribe();
        destroy.unsubscribe();
      });
    });
  }
  closeColorPicker() {
    this.colorPickerClosed.next();
    this.toggle = false;
    this.color = '#ffffff';
    this.position = { top: '0px', left: '0px' };
  }
}
