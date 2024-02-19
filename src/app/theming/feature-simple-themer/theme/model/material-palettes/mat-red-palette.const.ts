import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matRedPalette: Color[] = [
  { name: '050', hexCode: '#ffebee' },
  { name: '100', hexCode: '#ffcdd2', marks: [marks.lighter] },
  { name: '200', hexCode: '#ef9a9a' },
  { name: '300', hexCode: '#e57373' },
  { name: '400', hexCode: '#ef5350' },
  { name: '500', hexCode: '#f44336', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#e53935' },
  { name: '700', hexCode: '#d32f2f', marks: [marks.darker] },
  { name: '800', hexCode: '#c62828' },
  { name: '900', hexCode: '#b71c1c' },
  { name: 'A100', hexCode: '#ff8a80' },
  { name: 'A200', hexCode: '#ff5252' },
  { name: 'A400', hexCode: '#ff1744' },
  { name: 'A700', hexCode: '#d50000' }
];
