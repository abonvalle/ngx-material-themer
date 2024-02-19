import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matGreenPalette: Color[] = [
  { name: '050', hexCode: '#e8f5e9' },
  { name: '100', hexCode: '#c8e6c9', marks: [marks.lighter] },
  { name: '200', hexCode: '#a5d6a7' },
  { name: '300', hexCode: '#81c784' },
  { name: '400', hexCode: '#66bb6a' },
  { name: '500', hexCode: '#4caf50', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#43a047' },
  { name: '700', hexCode: '#388e3c', marks: [marks.darker] },
  { name: '800', hexCode: '#2e7d32' },
  { name: '900', hexCode: '#1b5e20' },
  { name: 'A100', hexCode: '#b9f6ca' },
  { name: 'A200', hexCode: '#69f0ae' },
  { name: 'A400', hexCode: '#00e676' },
  { name: 'A700', hexCode: '#00c853' }
];
