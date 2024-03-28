import { MatColor } from '../feature-simple-themer/theme/model';

export interface PresetTheme {
  value: string;
  label: string;
  primary: MatColor[];
  accent: MatColor[];
  warn: MatColor[];
  firstColor: string;
  secondColor: string;
  dark?: boolean;
}
