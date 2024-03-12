import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matPurplePalette: MatColor[] = [
  { name: '050', hexCode: '#f3e5f5', marks: [] },
  { name: '100', hexCode: '#e1bee7', marks: [marks.lighter] },
  { name: '200', hexCode: '#ce93d8', marks: [] },
  { name: '300', hexCode: '#ba68c8', marks: [] },
  { name: '400', hexCode: '#ab47bc', marks: [] },
  { name: '500', hexCode: '#9c27b0', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#8e24aa', marks: [] },
  { name: '700', hexCode: '#7b1fa2', marks: [marks.darker] },
  { name: '800', hexCode: '#6a1b9a', marks: [] },
  { name: '900', hexCode: '#4a148c', marks: [] },
  { name: 'A100', hexCode: '#ea80fc', marks: [] },
  { name: 'A200', hexCode: '#e040fb', marks: [] },
  { name: 'A400', hexCode: '#d500f9', marks: [] },
  { name: 'A700', hexCode: '#aa00ff', marks: [] }
];
