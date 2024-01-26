import { MaterialHue } from './material-hue.type';

export type MaterialColors = {
  [key in MaterialHue]: string;
};
