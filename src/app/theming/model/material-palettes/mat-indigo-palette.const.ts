import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matIndigoPalette: MatColor[] = [
  { name: '050', hexCode: '#e8eaf6', marks: [] },
  { name: '100', hexCode: '#c5cae9', marks: [marks.lighter] },
  { name: '200', hexCode: '#9fa8da', marks: [] },
  { name: '300', hexCode: '#7986cb', marks: [] },
  { name: '400', hexCode: '#5c6bc0', marks: [] },
  { name: '500', hexCode: '#3f51b5', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#3949ab', marks: [] },
  { name: '700', hexCode: '#303f9f', marks: [marks.darker] },
  { name: '800', hexCode: '#283593', marks: [] },
  { name: '900', hexCode: '#1a237e', marks: [] },
  { name: 'A100', hexCode: '#8c9eff', marks: [] },
  { name: 'A200', hexCode: '#536dfe', marks: [] },
  { name: 'A400', hexCode: '#3d5afe', marks: [] },
  { name: 'A700', hexCode: '#304ffe', marks: [] }
];
