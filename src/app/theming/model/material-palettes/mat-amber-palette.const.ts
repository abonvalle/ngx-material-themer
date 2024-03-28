import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matAmberPalette: MatColor[] = [
  { name: '050', hexCode: '#fff8e1', marks: [] },
  { name: '100', hexCode: '#ffecb3', marks: [marks.lighter] },
  { name: '200', hexCode: '#ffe082', marks: [] },
  { name: '300', hexCode: '#ffd54f', marks: [] },
  { name: '400', hexCode: '#ffca28', marks: [] },
  { name: '500', hexCode: '#ffc107', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#ffb300', marks: [] },
  { name: '700', hexCode: '#ffa000', marks: [marks.darker] },
  { name: '800', hexCode: '#ff8f00', marks: [] },
  { name: '900', hexCode: '#ff6f00', marks: [] },
  { name: 'A100', hexCode: '#ffe57f', marks: [] },
  { name: 'A200', hexCode: '#ffd740', marks: [] },
  { name: 'A400', hexCode: '#ffc400', marks: [] },
  { name: 'A700', hexCode: '#ffab00', marks: [] }
];
