import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matTealPalette: Color[] = [
  { name: '50', hexCode: '#e0f2f1' },
  { name: '100', hexCode: '#b2dfdb', marks: [marks.lighter] },
  { name: '200', hexCode: '#80cbc4' },
  { name: '300', hexCode: '#4db6ac' },
  { name: '400', hexCode: '#26a69a' },
  { name: '500', hexCode: '#009688', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#00897b' },
  { name: '700', hexCode: '#00796b', marks: [marks.darker] },
  { name: '800', hexCode: '#00695c' },
  { name: '900', hexCode: '#004d40' },
  { name: 'A100', hexCode: '#a7ffeb' },
  { name: 'A200', hexCode: '#64ffda' },
  { name: 'A400', hexCode: '#1de9b6' },
  { name: 'A700', hexCode: '#00bfa5' }
];
