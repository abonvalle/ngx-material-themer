import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matPinkPalette: Color[] = [
  { name: '050', hexCode: '#fce4ec' },
  { name: '100', hexCode: '#f8bbd0', marks: [marks.lighter] },
  { name: '200', hexCode: '#f48fb1' },
  { name: '300', hexCode: '#f06292' },
  { name: '400', hexCode: '#ec407a' },
  { name: '500', hexCode: '#e91e63', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#d81b60' },
  { name: '700', hexCode: '#c2185b', marks: [marks.darker] },
  { name: '800', hexCode: '#ad1457' },
  { name: '900', hexCode: '#880e4f' },
  { name: 'A100', hexCode: '#ff80ab' },
  { name: 'A200', hexCode: '#ff4081' },
  { name: 'A400', hexCode: '#f50057' },
  { name: 'A700', hexCode: '#c51162' }
];
