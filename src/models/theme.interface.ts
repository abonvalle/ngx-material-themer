import { PaletteName } from './palette-name.type';
import { Palette } from './palette.interface';

export interface Theme {
  name: string;
  label: string;
  palettes: Palette[];
}
