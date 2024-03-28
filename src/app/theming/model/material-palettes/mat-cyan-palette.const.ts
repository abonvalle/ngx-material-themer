import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matCyanPalette: MatColor[] = [
  { name: '50', hexCode: '#e0f7fa', marks: [] },
  { name: '100', hexCode: '#b2ebf2', marks: [marks.lighter] },
  { name: '200', hexCode: '#80deea', marks: [] },
  { name: '300', hexCode: '#4dd0e1', marks: [] },
  { name: '400', hexCode: '#26c6da', marks: [] },
  { name: '500', hexCode: '#00bcd4', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#00acc1', marks: [] },
  { name: '700', hexCode: '#0097a7', marks: [marks.darker] },
  { name: '800', hexCode: '#00838f', marks: [] },
  { name: '900', hexCode: '#006064', marks: [] },
  { name: 'A100', hexCode: '#84ffff', marks: [] },
  { name: 'A200', hexCode: '#18ffff', marks: [] },
  { name: 'A400', hexCode: '#00e5ff', marks: [] },
  { name: 'A700', hexCode: '#00b8d4', marks: [] }
];
