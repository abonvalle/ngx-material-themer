import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matAmberPalette: Color[] = [
  { name: '050', hexCode: '#fff8e1' },
  { name: '100', hexCode: '#ffecb3', marks: [marks.lighter] },
  { name: '200', hexCode: '#ffe082' },
  { name: '300', hexCode: '#ffd54f' },
  { name: '400', hexCode: '#ffca28' },
  { name: '500', hexCode: '#ffc107', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#ffb300' },
  { name: '700', hexCode: '#ffa000', marks: [marks.darker] },
  { name: '800', hexCode: '#ff8f00' },
  { name: '900', hexCode: '#ff6f00' },
  { name: 'A100', hexCode: '#ffe57f' },
  { name: 'A200', hexCode: '#ffd740' },
  { name: 'A400', hexCode: '#ffc400' },
  { name: 'A700', hexCode: '#ffab00' }
];
