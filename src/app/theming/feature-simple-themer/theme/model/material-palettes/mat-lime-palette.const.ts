import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matLimePalette: Color[] = [
  { name: '50', hexCode: '#f9fbe7' },
  { name: '100', hexCode: '#f0f4c3', marks: [marks.lighter] },
  { name: '200', hexCode: '#e6ee9c' },
  { name: '300', hexCode: '#dce775' },
  { name: '400', hexCode: '#d4e157' },
  { name: '500', hexCode: '#cddc39', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#c0ca33' },
  { name: '700', hexCode: '#afb42b', marks: [marks.darker] },
  { name: '800', hexCode: '#9e9d24' },
  { name: '900', hexCode: '#827717' },
  { name: 'A100', hexCode: '#f4ff81' },
  { name: 'A200', hexCode: '#eeff41' },
  { name: 'A400', hexCode: '#c6ff00' },
  { name: 'A700', hexCode: '#aeea00' }
];
