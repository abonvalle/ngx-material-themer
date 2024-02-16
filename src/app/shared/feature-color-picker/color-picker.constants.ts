import { Injectable } from '@angular/core';
import { MATERIAL_COLORS } from '@models/material-colors.const';

@Injectable({
  providedIn: 'root'
})
export class ColorPickerConstants {
  readonly defaultColor: string;
  readonly defaultPosition: { top: string; left: string };
  readonly defaultShowTemplate: boolean;
  readonly maxRecentlyUsedColors: number;
  readonly materialColors: {
    name: string;
    hexCode: string;
  }[];

  constructor() {
    this.defaultColor = '#ffffff';
    this.defaultPosition = { top: '0px', left: '0px' };
    this.defaultShowTemplate = true;
    this.maxRecentlyUsedColors = 12;
    this.materialColors = MATERIAL_COLORS;
  }
}
