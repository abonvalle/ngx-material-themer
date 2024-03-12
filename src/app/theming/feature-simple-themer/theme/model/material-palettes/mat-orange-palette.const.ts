import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matOrangePalette: MatColor[] = [
  { name: '50', hexCode: '#fff3e0', marks: [] },
  { name: '100', hexCode: '#ffe0b2', marks: [marks.lighter] },
  { name: '200', hexCode: '#ffcc80', marks: [] },
  { name: '300', hexCode: '#ffb74d', marks: [] },
  { name: '400', hexCode: '#ffa726', marks: [] },
  { name: '500', hexCode: '#ff9800', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#fb8c00', marks: [] },
  { name: '700', hexCode: '#f57c00', marks: [marks.darker] },
  { name: '800', hexCode: '#ef6c00', marks: [] },
  { name: '900', hexCode: '#e65100', marks: [] },
  { name: 'A100', hexCode: '#ffd180', marks: [] },
  { name: 'A200', hexCode: '#ffab40', marks: [] },
  { name: 'A400', hexCode: '#ff9100', marks: [] },
  { name: 'A700', hexCode: '#ff6d00', marks: [] }
];
