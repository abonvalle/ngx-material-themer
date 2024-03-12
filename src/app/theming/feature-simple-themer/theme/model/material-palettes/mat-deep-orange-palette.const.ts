import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matDeepOrangePalette: MatColor[] = [
  { name: '50', hexCode: '#fbe9e7', marks: [] },
  { name: '100', hexCode: '#ffccbc', marks: [marks.lighter] },
  { name: '200', hexCode: '#ffab91', marks: [] },
  { name: '300', hexCode: '#ff8a65', marks: [] },
  { name: '400', hexCode: '#ff7043', marks: [] },
  { name: '500', hexCode: '#ff5722', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#f4511e', marks: [] },
  { name: '700', hexCode: '#e64a19', marks: [marks.darker] },
  { name: '800', hexCode: '#d84315', marks: [] },
  { name: '900', hexCode: '#bf360c', marks: [] },
  { name: 'A100', hexCode: '#ff9e80', marks: [] },
  { name: 'A200', hexCode: '#ff6e40', marks: [] },
  { name: 'A400', hexCode: '#ff3d00', marks: [] },
  { name: 'A700', hexCode: '#dd2c00', marks: [] }
];
