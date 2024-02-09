import { Color } from './color.interface';
import { marks } from './marks.enum';

export const emptyPalette: Color[] = [
  { name: '050', hexCode: null },
  { name: '100', hexCode: null, marks: [marks.lighter] },
  { name: '200', hexCode: null },
  { name: '300', hexCode: null },
  { name: '400', hexCode: null },
  { name: '500', hexCode: null, marks: [marks.default, marks.text] },
  { name: '600', hexCode: null },
  { name: '700', hexCode: null, marks: [marks.darker] },
  { name: '800', hexCode: null },
  { name: '900', hexCode: null }
];
