import { Color } from './color.interface';
import { marks } from './marks.enum';

export const emptyPalette: Color[] = [
  { name: '050', hexCode: null, marks: [], contrastLight: true, contrastRatio: 0 },
  { name: '100', hexCode: null, marks: [marks.lighter], contrastLight: true, contrastRatio: 0 },
  { name: '200', hexCode: null, marks: [], contrastLight: true, contrastRatio: 0 },
  { name: '300', hexCode: null, marks: [], contrastLight: true, contrastRatio: 0 },
  { name: '400', hexCode: null, marks: [], contrastLight: true, contrastRatio: 0 },
  { name: '500', hexCode: null, marks: [marks.default, marks.text], contrastLight: true, contrastRatio: 0 },
  { name: '600', hexCode: null, marks: [], contrastLight: true, contrastRatio: 0 },
  { name: '700', hexCode: null, marks: [marks.darker], contrastLight: true, contrastRatio: 0 },
  { name: '800', hexCode: null, marks: [], contrastLight: true, contrastRatio: 0 },
  { name: '900', hexCode: null, marks: [], contrastLight: true, contrastRatio: 0 }
];
