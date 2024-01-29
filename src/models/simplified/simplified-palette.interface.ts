import { SimplifiedPaletteColorNames } from './simplified-palette-color-names.type';
import { SimplifiedPaletteColor } from './simplified-palette-color.interface';

export type SimplifiedPalette = {
  [key in SimplifiedPaletteColorNames]: SimplifiedPaletteColor;
};
