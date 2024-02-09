import { marks } from './marks.enum';

export interface colorTile {
  name: string;
  hexCode: string | null;
  text: string;
  textColor: string;
  marks: marks[];
}
