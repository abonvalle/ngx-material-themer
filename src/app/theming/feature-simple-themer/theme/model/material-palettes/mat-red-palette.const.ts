import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matRedPalette: MatColor[] = [
  { name: '050', hexCode: '#ffebee', marks: [] },
  { name: '100', hexCode: '#ffcdd2', marks: [marks.lighter] },
  { name: '200', hexCode: '#ef9a9a', marks: [] },
  { name: '300', hexCode: '#e57373', marks: [] },
  { name: '400', hexCode: '#ef5350', marks: [] },
  { name: '500', hexCode: '#f44336', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#e53935', marks: [] },
  { name: '700', hexCode: '#d32f2f', marks: [marks.darker] },
  { name: '800', hexCode: '#c62828', marks: [] },
  { name: '900', hexCode: '#b71c1c', marks: [] },
  { name: 'A100', hexCode: '#ff8a80', marks: [] },
  { name: 'A200', hexCode: '#ff5252', marks: [] },
  { name: 'A400', hexCode: '#ff1744', marks: [] },
  { name: 'A700', hexCode: '#d50000', marks: [] }
];
