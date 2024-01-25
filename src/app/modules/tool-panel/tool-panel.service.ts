import { HostListener, Injectable, WritableSignal, computed, signal } from '@angular/core';
import { ColorBrickComponent } from '../features/color-brick/color-brick.component';

@Injectable({
  providedIn: 'root'
})
export class ToolPanelService {
  currentElement: WritableSignal<ColorBrickComponent | null> = signal(null);
  // currentElementColor = computed(() => this.currentElement()?.color || null);
  constructor() {}
  updateCurrentElementColor(color: string | null) {
    console.warn('updateCurrentElementColor', this.currentElement(), color);
    this.currentElement()?.setColor(color);
  }
}
