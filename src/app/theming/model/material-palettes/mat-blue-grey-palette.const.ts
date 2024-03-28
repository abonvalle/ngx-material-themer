import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matBlueGreyPalette: MatColor[] = [
  { name: '050', hexCode: '#eceff1', marks: [] },
  { name: '100', hexCode: '#cfd8dc', marks: [marks.lighter] },
  { name: '200', hexCode: '#b0bec5', marks: [] },
  { name: '300', hexCode: '#90a4ae', marks: [] },
  { name: '400', hexCode: '#78909c', marks: [] },
  { name: '500', hexCode: '#607d8b', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#546e7a', marks: [] },
  { name: '700', hexCode: '#455a64', marks: [marks.darker] },
  { name: '800', hexCode: '#37474f', marks: [] },
  { name: '900', hexCode: '#263238', marks: [] },
  { name: 'A100', hexCode: '#cfd8dc', marks: [] },
  { name: 'A200', hexCode: '#b0bec5', marks: [] },
  { name: 'A400', hexCode: '#78909c', marks: [] },
  { name: 'A700', hexCode: '#455a64', marks: [] }
];
