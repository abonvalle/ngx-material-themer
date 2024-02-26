import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matGreyPalette: Color[] = [
  { name: '50', hexCode: '#fafafa' },
  { name: '100', hexCode: '#f5f5f5', marks: [marks.lighter] },
  { name: '200', hexCode: '#eeeeee' },
  { name: '300', hexCode: '#e0e0e0' },
  { name: '400', hexCode: '#bdbdbd' },
  { name: '500', hexCode: '#9e9e9e', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#757575' },
  { name: '700', hexCode: '#616161', marks: [marks.darker] },
  { name: '800', hexCode: '#424242' },
  { name: '900', hexCode: '#212121' },
  { name: 'A100', hexCode: '#ffffff' },
  { name: 'A200', hexCode: '#000000' },
  { name: 'A400', hexCode: '#303030' },
  { name: 'A700', hexCode: '#616161' }
];
