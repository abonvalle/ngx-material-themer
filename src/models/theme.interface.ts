import { PaletteName } from './palette-name.type';
interface hues {
  '050': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}
export interface Theme {
  name: string;
  palettes: {
    [key in PaletteName]: {
      hues: hues;
      contrasts: hues;
      fontColors: { dark: string; light: string };
      default: keyof hues;
      darker: keyof hues;
      lighter: keyof hues;
      text: keyof hues;
    };
  };
}
