import { MaterialHue } from './material-hue.type';

export type MaterialPalette = {
  [key in MaterialHue]: string;
} & { contrast: { [key in MaterialHue]: string } };
