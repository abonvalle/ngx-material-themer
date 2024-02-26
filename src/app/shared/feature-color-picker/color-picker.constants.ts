import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerConstants {
  readonly defaultColor: string;
  readonly defaultPosition: { top: string; left: string };
  readonly defaultShowTemplate: boolean;
  readonly maxRecentlyUsedColors: number;

  constructor() {
    this.defaultColor = '#ffffff';
    this.defaultPosition = { top: '0px', left: '0px' };
    this.defaultShowTemplate = true;
    this.maxRecentlyUsedColors = 12;
  }
}
