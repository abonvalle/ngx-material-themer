import { marks } from '../marks.enum';
import { MatColor } from '../mat-color.interface';

export const matDeepPurplePalette: MatColor[] = [
  { name: '050', hexCode: '#ede7f6', marks: [] },
  { name: '100', hexCode: '#d1c4e9', marks: [marks.lighter] },
  { name: '200', hexCode: '#b39ddb', marks: [] },
  { name: '300', hexCode: '#9575cd', marks: [] },
  { name: '400', hexCode: '#7e57c2', marks: [] },
  { name: '500', hexCode: '#673ab7', marks: [marks.default, marks.text] },
  { name: '600', hexCode: '#5e35b1', marks: [] },
  { name: '700', hexCode: '#512da8', marks: [marks.darker] },
  { name: '800', hexCode: '#4527a0', marks: [] },
  { name: '900', hexCode: '#311b92', marks: [] },
  { name: 'A100', hexCode: '#b388ff', marks: [] },
  { name: 'A200', hexCode: '#7c4dff', marks: [] },
  { name: 'A400', hexCode: '#651fff', marks: [] },
  { name: 'A700', hexCode: '#6200ea', marks: [] }
];
