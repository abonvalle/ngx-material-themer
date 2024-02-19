import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matIndigoPalette: Color[] = [
  { name: '050', hexCode: '#e8eaf6' },
  { name: '100', hexCode: '#c5cae9', marks: [marks.lighter] },
  { name: '200', hexCode: '#9fa8da' },
  { name: '300', hexCode: '#7986cb' },
  { name: '400', hexCode: '#5c6bc0' },
  { name: '500', hexCode: '#3f51b5', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#3949ab' },
  { name: '700', hexCode: '#303f9f', marks: [marks.darker] },
  { name: '800', hexCode: '#283593' },
  { name: '900', hexCode: '#1a237e' },
  { name: 'A100', hexCode: '#8c9eff' },
  { name: 'A200', hexCode: '#536dfe' },
  { name: 'A400', hexCode: '#3d5afe' },
  { name: 'A700', hexCode: '#304ffe' }
];
