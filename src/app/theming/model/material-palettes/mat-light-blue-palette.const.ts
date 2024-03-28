import { marks } from '../../feature-simple-themer/theme/model/marks.enum';
import { MatColor } from '../../feature-simple-themer/theme/model/mat-color.interface';

export const matLightBluePalette: MatColor[] = [
  { name: '50', hexCode: '#e1f5fe', marks: [] },
  { name: '100', hexCode: '#b3e5fc', marks: [marks.lighter] },
  { name: '200', hexCode: '#81d4fa', marks: [] },
  { name: '300', hexCode: '#4fc3f7', marks: [] },
  { name: '400', hexCode: '#29b6f6', marks: [] },
  { name: '500', hexCode: '#03a9f4', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#039be5', marks: [] },
  { name: '700', hexCode: '#0288d1', marks: [marks.darker] },
  { name: '800', hexCode: '#0277bd', marks: [] },
  { name: '900', hexCode: '#01579b', marks: [] },
  { name: 'A100', hexCode: '#80d8ff', marks: [] },
  { name: 'A200', hexCode: '#40c4ff', marks: [] },
  { name: 'A400', hexCode: '#00b0ff', marks: [] },
  { name: 'A700', hexCode: '#0091ea', marks: [] }
];
