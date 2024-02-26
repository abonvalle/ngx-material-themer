import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matBrownPalette: Color[] = [
  { name: '50', hexCode: '#efebe9' },
  { name: '100', hexCode: '#d7ccc8', marks: [marks.lighter] },
  { name: '200', hexCode: '#bcaaa4' },
  { name: '300', hexCode: '#a1887f' },
  { name: '400', hexCode: '#8d6e63' },
  { name: '500', hexCode: '#795548', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#6d4c41' },
  { name: '700', hexCode: '#5d4037', marks: [marks.darker] },
  { name: '800', hexCode: '#4e342e' },
  { name: '900', hexCode: '#3e2723' },
  { name: 'A100', hexCode: '#d7ccc8' },
  { name: 'A200', hexCode: '#bcaaa4' },
  { name: 'A400', hexCode: '#8d6e63' },
  { name: 'A700', hexCode: '#5d4037' }
];
