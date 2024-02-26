import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matOrangePalette: Color[] = [
  { name: '50', hexCode: '#fff3e0' },
  { name: '100', hexCode: '#ffe0b2', marks: [marks.lighter] },
  { name: '200', hexCode: '#ffcc80' },
  { name: '300', hexCode: '#ffb74d' },
  { name: '400', hexCode: '#ffa726' },
  { name: '500', hexCode: '#ff9800', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#fb8c00' },
  { name: '700', hexCode: '#f57c00', marks: [marks.darker] },
  { name: '800', hexCode: '#ef6c00' },
  { name: '900', hexCode: '#e65100' },
  { name: 'A100', hexCode: '#ffd180' },
  { name: 'A200', hexCode: '#ffab40' },
  { name: 'A400', hexCode: '#ff9100' },
  { name: 'A700', hexCode: '#ff6d00' }
];
