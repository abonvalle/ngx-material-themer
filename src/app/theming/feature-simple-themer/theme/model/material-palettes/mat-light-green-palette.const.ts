import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matLightGreenPalette: Color[] = [
  { name: '50', hexCode: '#f1f8e9' },
  { name: '100', hexCode: '#dcedc8', marks: [marks.lighter] },
  { name: '200', hexCode: '#c5e1a5' },
  { name: '300', hexCode: '#aed581' },
  { name: '400', hexCode: '#9ccc65' },
  { name: '500', hexCode: '#8bc34a', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#7cb342' },
  { name: '700', hexCode: '#689f38', marks: [marks.darker] },
  { name: '800', hexCode: '#558b2f' },
  { name: '900', hexCode: '#33691e' },
  { name: 'A100', hexCode: '#ccff90' },
  { name: 'A200', hexCode: '#b2ff59' },
  { name: 'A400', hexCode: '#76ff03' },
  { name: 'A700', hexCode: '#64dd17' }
];
