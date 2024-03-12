import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matLimePalette: MatColor[] = [
  { name: '50', hexCode: '#f9fbe7', marks: [] },
  { name: '100', hexCode: '#f0f4c3', marks: [marks.lighter] },
  { name: '200', hexCode: '#e6ee9c', marks: [] },
  { name: '300', hexCode: '#dce775', marks: [] },
  { name: '400', hexCode: '#d4e157', marks: [] },
  { name: '500', hexCode: '#cddc39', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#c0ca33', marks: [] },
  { name: '700', hexCode: '#afb42b', marks: [marks.darker] },
  { name: '800', hexCode: '#9e9d24', marks: [] },
  { name: '900', hexCode: '#827717', marks: [] },
  { name: 'A100', hexCode: '#f4ff81', marks: [] },
  { name: 'A200', hexCode: '#eeff41', marks: [] },
  { name: 'A400', hexCode: '#c6ff00', marks: [] },
  { name: 'A700', hexCode: '#aeea00', marks: [] }
];
