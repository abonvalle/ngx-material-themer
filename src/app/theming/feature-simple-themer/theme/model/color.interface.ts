import { marks } from './marks.enum';

export interface Color {
  name: string;
  hexCode: string | null;
  marks: marks[];
  contrastLight: boolean;
  contrastRatio: number;
}
