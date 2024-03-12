import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matLightGreenPalette: MatColor[] = [
  { name: '50', hexCode: '#f1f8e9', marks: [] },
  { name: '100', hexCode: '#dcedc8', marks: [marks.lighter] },
  { name: '200', hexCode: '#c5e1a5', marks: [] },
  { name: '300', hexCode: '#aed581', marks: [] },
  { name: '400', hexCode: '#9ccc65', marks: [] },
  { name: '500', hexCode: '#8bc34a', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#7cb342', marks: [] },
  { name: '700', hexCode: '#689f38', marks: [marks.darker] },
  { name: '800', hexCode: '#558b2f', marks: [] },
  { name: '900', hexCode: '#33691e', marks: [] },
  { name: 'A100', hexCode: '#ccff90', marks: [] },
  { name: 'A200', hexCode: '#b2ff59', marks: [] },
  { name: 'A400', hexCode: '#76ff03', marks: [] },
  { name: 'A700', hexCode: '#64dd17', marks: [] }
];
