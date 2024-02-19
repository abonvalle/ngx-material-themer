import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matDeepPurplePalette: Color[] = [
  { name: '050', hexCode: '#ede7f6' },
  { name: '100', hexCode: '#d1c4e9', marks: [marks.lighter] },
  { name: '200', hexCode: '#b39ddb' },
  { name: '300', hexCode: '#9575cd' },
  { name: '400', hexCode: '#7e57c2' },
  { name: '500', hexCode: '#673ab7', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#5e35b1' },
  { name: '700', hexCode: '#512da8', marks: [marks.darker] },
  { name: '800', hexCode: '#4527a0' },
  { name: '900', hexCode: '#311b92' },
  { name: 'A100', hexCode: '#b388ff' },
  { name: 'A200', hexCode: '#7c4dff' },
  { name: 'A400', hexCode: '#651fff' },
  { name: 'A700', hexCode: '#6200ea' }
];
