import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matYellowPalette: Color[] = [
  { name: '50', hexCode: '#fffde7' },
  { name: '100', hexCode: '#fff9c4', marks: [marks.lighter] },
  { name: '200', hexCode: '#fff59d' },
  { name: '300', hexCode: '#fff176' },
  { name: '400', hexCode: '#ffee58' },
  { name: '500', hexCode: '#ffeb3b', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#fdd835' },
  { name: '700', hexCode: '#fbc02d', marks: [marks.darker] },
  { name: '800', hexCode: '#f9a825' },
  { name: '900', hexCode: '#f57f17' },
  { name: 'A100', hexCode: '#ffff8d' },
  { name: 'A200', hexCode: '#ffff00' },
  { name: 'A400', hexCode: '#ffea00' },
  { name: 'A700', hexCode: '#ffd600' }
];
