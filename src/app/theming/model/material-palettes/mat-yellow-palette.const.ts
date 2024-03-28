import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matYellowPalette: MatColor[] = [
  { name: '50', hexCode: '#fffde7', marks: [] },
  { name: '100', hexCode: '#fff9c4', marks: [marks.lighter] },
  { name: '200', hexCode: '#fff59d', marks: [] },
  { name: '300', hexCode: '#fff176', marks: [] },
  { name: '400', hexCode: '#ffee58', marks: [] },
  { name: '500', hexCode: '#ffeb3b', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#fdd835', marks: [] },
  { name: '700', hexCode: '#fbc02d', marks: [marks.darker] },
  { name: '800', hexCode: '#f9a825', marks: [] },
  { name: '900', hexCode: '#f57f17', marks: [] },
  { name: 'A100', hexCode: '#ffff8d', marks: [] },
  { name: 'A200', hexCode: '#ffff00', marks: [] },
  { name: 'A400', hexCode: '#ffea00', marks: [] },
  { name: 'A700', hexCode: '#ffd600', marks: [] }
];
