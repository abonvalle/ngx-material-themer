import { MaterialPalette } from './material/material-palette.interface';
import { PaletteName } from './palette-name.type';

export interface Palette {
  readonly name: PaletteName;
  colors: MaterialPalette;
}
[];
