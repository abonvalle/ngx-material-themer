import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matPinkPalette: MatColor[] = [
  { name: '050', hexCode: '#fce4ec', marks: [] },
  { name: '100', hexCode: '#f8bbd0', marks: [marks.lighter] },
  { name: '200', hexCode: '#f48fb1', marks: [] },
  { name: '300', hexCode: '#f06292', marks: [] },
  { name: '400', hexCode: '#ec407a', marks: [] },
  { name: '500', hexCode: '#e91e63', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#d81b60', marks: [] },
  { name: '700', hexCode: '#c2185b', marks: [marks.darker] },
  { name: '800', hexCode: '#ad1457', marks: [] },
  { name: '900', hexCode: '#880e4f', marks: [] },
  { name: 'A100', hexCode: '#ff80ab', marks: [] },
  { name: 'A200', hexCode: '#ff4081', marks: [] },
  { name: 'A400', hexCode: '#f50057', marks: [] },
  { name: 'A700', hexCode: '#c51162', marks: [] }
];
