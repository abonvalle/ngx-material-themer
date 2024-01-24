import { MaterialPalette } from './material-palette.interface';

export interface MaterialTheme {
  color: {
    primary: MaterialPalette;
    accent: MaterialPalette;
    warn: MaterialPalette;
  };
  // typography:MaterialTypography,
  density: number;
}
