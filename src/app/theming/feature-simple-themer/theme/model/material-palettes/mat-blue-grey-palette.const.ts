import { Color } from '../color.interface';
import { marks } from '../marks.enum';

export const matBlueGreyPalette: Color[] = [
  { name: '050', hexCode: '#eceff1' },
  { name: '100', hexCode: '#cfd8dc', marks: [marks.lighter] },
  { name: '200', hexCode: '#b0bec5' },
  { name: '300', hexCode: '#90a4ae' },
  { name: '400', hexCode: '#78909c' },
  { name: '500', hexCode: '#607d8b', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#546e7a' },
  { name: '700', hexCode: '#455a64', marks: [marks.darker] },
  { name: '800', hexCode: '#37474f' },
  { name: '900', hexCode: '#263238' },
  { name: 'A100', hexCode: '#cfd8dc' },
  { name: 'A200', hexCode: '#b0bec5' },
  { name: 'A400', hexCode: '#78909c' },
  { name: 'A700', hexCode: '#455a64' }
];
