import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matGreenPalette: MatColor[] = [
  { name: '050', hexCode: '#e8f5e9', marks: [] },
  { name: '100', hexCode: '#c8e6c9', marks: [marks.lighter] },
  { name: '200', hexCode: '#a5d6a7', marks: [] },
  { name: '300', hexCode: '#81c784', marks: [] },
  { name: '400', hexCode: '#66bb6a', marks: [] },
  { name: '500', hexCode: '#4caf50', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#43a047', marks: [] },
  { name: '700', hexCode: '#388e3c', marks: [marks.darker] },
  { name: '800', hexCode: '#2e7d32', marks: [] },
  { name: '900', hexCode: '#1b5e20', marks: [] },
  { name: 'A100', hexCode: '#b9f6ca', marks: [] },
  { name: 'A200', hexCode: '#69f0ae', marks: [] },
  { name: 'A400', hexCode: '#00e676', marks: [] },
  { name: 'A700', hexCode: '#00c853', marks: [] }
];
