import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matBluePalette: Color[] = [
  { name: '050', hexCode: '#e3f2fd' },
  { name: '100', hexCode: '#bbdefb', marks: [marks.lighter] },
  { name: '200', hexCode: '#90caf9' },
  { name: '300', hexCode: '#64b5f6' },
  { name: '400', hexCode: '#42a5f5' },
  { name: '500', hexCode: '#2196f3', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#1e88e5' },
  { name: '700', hexCode: '#1976d2', marks: [marks.darker] },
  { name: '800', hexCode: '#1565c0' },
  { name: '900', hexCode: '#0d47a1' },
  { name: 'A100', hexCode: '#82b1ff' },
  { name: 'A200', hexCode: '#448aff' },
  { name: 'A400', hexCode: '#2979ff' },
  { name: 'A700', hexCode: '#2962ff' }
];
