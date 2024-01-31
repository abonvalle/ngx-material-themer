import { Injectable, WritableSignal, signal } from '@angular/core';
import { ColorTileComponent } from '@features/color-palette/components/color-tile/color-tile.component';
import { ColorBrickComponent } from '../../features/legacy/color-brick/color-brick.component';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerService {
  currentElement: WritableSignal<ColorBrickComponent | ColorTileComponent | null> = signal(null);
  // currentElementColor = computed(() => this.currentElement()?.color || null);
  constructor() {}
  updateCurrentElementColor(color: string | null) {
    this.currentElement()?.setColor(color ?? '');
  }
  // updateCurrentElementContrasts(contrasts: { dark?: string; light?: string }) {
  //   this.currentElement()?.setContrasts(contrasts);
  // }
}
