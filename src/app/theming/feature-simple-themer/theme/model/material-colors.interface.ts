import { MaterialHue } from './material-hue.type';
/** @deprecated Must use an appropriate type not mat related */
export type MaterialColors = {
  [key in MaterialHue]: string | null;
};
