import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matBluePalette: MatColor[] = [
  { name: '050', hexCode: '#e3f2fd', marks: [] },
  { name: '100', hexCode: '#bbdefb', marks: [marks.lighter] },
  { name: '200', hexCode: '#90caf9', marks: [] },
  { name: '300', hexCode: '#64b5f6', marks: [] },
  { name: '400', hexCode: '#42a5f5', marks: [] },
  { name: '500', hexCode: '#2196f3', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#1e88e5', marks: [] },
  { name: '700', hexCode: '#1976d2', marks: [marks.darker] },
  { name: '800', hexCode: '#1565c0', marks: [] },
  { name: '900', hexCode: '#0d47a1', marks: [] },
  { name: 'A100', hexCode: '#82b1ff', marks: [] },
  { name: 'A200', hexCode: '#448aff', marks: [] },
  { name: 'A400', hexCode: '#2979ff', marks: [] },
  { name: 'A700', hexCode: '#2962ff', marks: [] }
];
