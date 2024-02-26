import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matDeepOrangePalette: Color[] = [
  { name: '50', hexCode: '#fbe9e7' },
  { name: '100', hexCode: '#ffccbc', marks: [marks.lighter] },
  { name: '200', hexCode: '#ffab91' },
  { name: '300', hexCode: '#ff8a65' },
  { name: '400', hexCode: '#ff7043' },
  { name: '500', hexCode: '#ff5722', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#f4511e' },
  { name: '700', hexCode: '#e64a19', marks: [marks.darker] },
  { name: '800', hexCode: '#d84315' },
  { name: '900', hexCode: '#bf360c' },
  { name: 'A100', hexCode: '#ff9e80' },
  { name: 'A200', hexCode: '#ff6e40' },
  { name: 'A400', hexCode: '#ff3d00' },
  { name: 'A700', hexCode: '#dd2c00' }
];
