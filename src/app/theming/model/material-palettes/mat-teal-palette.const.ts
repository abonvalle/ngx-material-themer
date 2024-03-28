import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matTealPalette: MatColor[] = [
  { name: '50', hexCode: '#e0f2f1', marks: [] },
  { name: '100', hexCode: '#b2dfdb', marks: [marks.lighter] },
  { name: '200', hexCode: '#80cbc4', marks: [] },
  { name: '300', hexCode: '#4db6ac', marks: [] },
  { name: '400', hexCode: '#26a69a', marks: [] },
  { name: '500', hexCode: '#009688', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#00897b', marks: [] },
  { name: '700', hexCode: '#00796b', marks: [marks.darker] },
  { name: '800', hexCode: '#00695c', marks: [] },
  { name: '900', hexCode: '#004d40', marks: [] },
  { name: 'A100', hexCode: '#a7ffeb', marks: [] },
  { name: 'A200', hexCode: '#64ffda', marks: [] },
  { name: 'A400', hexCode: '#1de9b6', marks: [] },
  { name: 'A700', hexCode: '#00bfa5', marks: [] }
];
