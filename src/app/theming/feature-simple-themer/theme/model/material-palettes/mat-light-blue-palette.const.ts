import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matLightBluePalette: Color[] = [
  { name: '50', hexCode: '#e1f5fe' },
  { name: '100', hexCode: '#b3e5fc', marks: [marks.lighter] },
  { name: '200', hexCode: '#81d4fa' },
  { name: '300', hexCode: '#4fc3f7' },
  { name: '400', hexCode: '#29b6f6' },
  { name: '500', hexCode: '#03a9f4', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#039be5' },
  { name: '700', hexCode: '#0288d1', marks: [marks.darker] },
  { name: '800', hexCode: '#0277bd' },
  { name: '900', hexCode: '#01579b' },
  { name: 'A100', hexCode: '#80d8ff' },
  { name: 'A200', hexCode: '#40c4ff' },
  { name: 'A400', hexCode: '#00b0ff' },
  { name: 'A700', hexCode: '#0091ea' }
];
