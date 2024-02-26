import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matCyanPalette: Color[] = [
  { name: '50', hexCode: '#e0f7fa' },
  { name: '100', hexCode: '#b2ebf2', marks: [marks.lighter] },
  { name: '200', hexCode: '#80deea' },
  { name: '300', hexCode: '#4dd0e1' },
  { name: '400', hexCode: '#26c6da' },
  { name: '500', hexCode: '#00bcd4', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#00acc1' },
  { name: '700', hexCode: '#0097a7', marks: [marks.darker] },
  { name: '800', hexCode: '#00838f' },
  { name: '900', hexCode: '#006064' },
  { name: 'A100', hexCode: '#84ffff' },
  { name: 'A200', hexCode: '#18ffff' },
  { name: 'A400', hexCode: '#00e5ff' },
  { name: 'A700', hexCode: '#00b8d4' }
];
