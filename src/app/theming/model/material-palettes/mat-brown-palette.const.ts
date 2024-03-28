import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matBrownPalette: MatColor[] = [
  { name: '50', hexCode: '#efebe9', marks: [] },
  { name: '100', hexCode: '#d7ccc8', marks: [marks.lighter] },
  { name: '200', hexCode: '#bcaaa4', marks: [] },
  { name: '300', hexCode: '#a1887f', marks: [] },
  { name: '400', hexCode: '#8d6e63', marks: [] },
  { name: '500', hexCode: '#795548', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#6d4c41', marks: [] },
  { name: '700', hexCode: '#5d4037', marks: [marks.darker] },
  { name: '800', hexCode: '#4e342e', marks: [] },
  { name: '900', hexCode: '#3e2723', marks: [] },
  { name: 'A100', hexCode: '#d7ccc8', marks: [] },
  { name: 'A200', hexCode: '#bcaaa4', marks: [] },
  { name: 'A400', hexCode: '#8d6e63', marks: [] },
  { name: 'A700', hexCode: '#5d4037', marks: [] }
];
