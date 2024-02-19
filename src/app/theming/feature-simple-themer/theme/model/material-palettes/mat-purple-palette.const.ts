import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matPurplePalette: Color[] = [
  { name: '050', hexCode: '#f3e5f5' },
  { name: '100', hexCode: '#e1bee7', marks: [marks.lighter] },
  { name: '200', hexCode: '#ce93d8' },
  { name: '300', hexCode: '#ba68c8' },
  { name: '400', hexCode: '#ab47bc' },
  { name: '500', hexCode: '#9c27b0', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#8e24aa' },
  { name: '700', hexCode: '#7b1fa2', marks: [marks.darker] },
  { name: '800', hexCode: '#6a1b9a' },
  { name: '900', hexCode: '#4a148c' },
  { name: 'A100', hexCode: '#ea80fc' },
  { name: 'A200', hexCode: '#e040fb' },
  { name: 'A400', hexCode: '#d500f9' },
  { name: 'A700', hexCode: '#aa00ff' }
];
