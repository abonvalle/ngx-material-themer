import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matGreyPalette: MatColor[] = [
  { name: '50', hexCode: '#fafafa', marks: [] },
  { name: '100', hexCode: '#f5f5f5', marks: [marks.lighter] },
  { name: '200', hexCode: '#eeeeee', marks: [] },
  { name: '300', hexCode: '#e0e0e0', marks: [] },
  { name: '400', hexCode: '#bdbdbd', marks: [] },
  { name: '500', hexCode: '#9e9e9e', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#757575', marks: [] },
  { name: '700', hexCode: '#616161', marks: [marks.darker] },
  { name: '800', hexCode: '#424242', marks: [] },
  { name: '900', hexCode: '#212121', marks: [] },
  { name: 'A100', hexCode: '#ffffff', marks: [] },
  { name: 'A200', hexCode: '#000000', marks: [] },
  { name: 'A400', hexCode: '#303030', marks: [] },
  { name: 'A700', hexCode: '#616161', marks: [] }
];
