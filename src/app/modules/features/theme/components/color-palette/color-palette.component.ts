import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
  signal
} from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { emptyPalette } from '@models/empty-palette.const';
import { hueKeys } from '@models/hue-keys.const';
import { MaterialColors } from '@models/material/material-colors.interface';
import { MaterialPalette } from '@models/material/material-palette.interface';
import { createPalette } from '@modules/shared/colors.utils';
import { HelpTooltipComponent } from '@modules/shared/help-tooltip/help-tooltip.component';
import { ConfigService } from '@modules/shared/services/config.service';
import { PalettesService } from '@modules/shared/services/palettes.service';
import { Color } from '../../../../../../models/color.interface';
import { ColorBrickComponent } from '../../../legacy/color-brick/color-brick.component';
import { ColorTileComponent } from '../color-tile/color-tile.component';
declare const tinycolor: any;

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [
    CommonModule,
    ColorBrickComponent,
    MatExpansionModule,
    MatIconModule,
    HelpTooltipComponent,
    MatChipsModule,
    CdkDropList,
    CdkDrag,
    ColorTileComponent,
    MatExpansionModule,
    MatCheckboxModule
  ],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPaletteComponent implements OnChanges {
  @Input({ required: true }) name: string = '';
  @Input() tooltip: string = '';
  @Input({ required: true }) palette: MaterialPalette = Object.assign({}, emptyPalette);
  @Output() paletteChange: EventEmitter<MaterialPalette> = new EventEmitter();
  expanded = signal(false);
  showLabel = signal(false);
  smoothHideTimeout: number | null = null;
  paletteColors = signal(this.setPaletteColors(this.palette));
  hideHelpTooltips = this._configService.hideHelpTooltips;
  destroyRef = inject(DestroyRef);
  lighterColor = '';
  defaultColor = '';
  textColor = '';
  darkerColor = '';
  automaticShades = signal(true);
  constructor(
    private _cdrRef: ChangeDetectorRef,
    private _configService: ConfigService,
    private _palettesService: PalettesService,
    public dialog: MatDialog
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      return;
    }
    if (changes['palette']) {
      this.paletteColors.set(this.setPaletteColors(this.palette));
    }
  }
  setPaletteColors(palette: MaterialPalette): MaterialColors {
    const colors: Partial<MaterialPalette> = palette;
    delete colors.contrast;
    return colors as MaterialColors;
  }
  toggleShowLabel(enter: boolean) {
    if (!enter) {
      //Smooth hide
      this.smoothHide();
    } else {
      this.smoothHideTimeout !== null && window.clearTimeout(this.smoothHideTimeout);
      this.showLabel.update((_) => true);
    }
  }
  smoothHide() {
    this.smoothHideTimeout !== null && window.clearTimeout(this.smoothHideTimeout);

    this.smoothHideTimeout = window.setTimeout(() => {
      this.showLabel.update((_) => false);
    }, 500);
  }
  setExpanded(value: boolean) {
    this.showLabel.update((_) => false);
    this.expanded.update((_) => value);
  }
  updatePalette(color: string) {
    const paletteColors = this.computeColors(color);
    Object.entries(this.palette).map(([key, color]) => {
      if (typeof color !== 'string') {
        return;
      }
      this.palette[key as keyof MaterialColors] = paletteColors.find((c) => c.name === key)?.hex || color;
    });
  }

  updateTheme(colors: Color[], theme: string) {
    colors.forEach((color) => {
      document.documentElement.style.setProperty(`--theme-${theme}-${color.name}`, color.hex);
      // document.documentElement.style.setProperty(
      // `--theme-${theme}-contrast-${color.name}`,
      // color.darkContrast ? 'rgba(black, 0.87)' : 'white'
      // );
    });
  }

  computeColors(hex: string): Color[] {
    return createPalette(hex).map((color: string, index: number) => this.getColorObject(color, hueKeys[index]));
    // return [
    //   this.getColorObject(tinycolor(hex).lighten(52), '050'),
    //   this.getColorObject(tinycolor(hex).lighten(37), '100'),
    //   this.getColorObject(tinycolor(hex).lighten(26), '200'),
    //   this.getColorObject(tinycolor(hex).lighten(12), '300'),
    //   this.getColorObject(tinycolor(hex).lighten(6.75), '400'),
    //   this.getColorObject(tinycolor(hex), '500'),
    //   this.getColorObject(tinycolor(hex).darken(6), '600'),
    //   this.getColorObject(tinycolor(hex).darken(12), '700'),
    //   this.getColorObject(tinycolor(hex).darken(18), '800'),
    //   this.getColorObject(tinycolor(hex).darken(24), '900'),
    //   this.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
    //   this.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
    //   this.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
    //   this.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    // ];

    /**
     *
     * function lightenColor(hexColor, percent) {
  // Convert hex to RGB
  const hex = hexColor.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate new RGB values
  const newR = computeColor(r, percent);
  const newG = computeColor(g, percent);
  const newB = computeColor(b, percent);
  console.log(newR, newG, newB)
  // Convert back to hex
  const newHex = `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;

  return newHex;
}

function computeColor(n, percent) {
  const percentAbs = Math.abs(percent)
  let res = percent < 0 ? (n + (percentAbs * (255 - n)) / 100) : ()//????
  return Math.min(255, Math.max(0, res))
}

const originalColor = "#ffeb3b";
console.log(lightenColor(originalColor, -15)); //400
//console.log(lightenColor(originalColor, 30.2)); //300
//console.log(lightenColor(originalColor, 50)); //200
//console.log(lightenColor(originalColor, 69.7)); //100
//console.log(lightenColor(originalColor, 87.9)); //50
console.log(lightenColor(originalColor, 15)); //600

     */
  }

  getColorObject(value: any, name: string): Color {
    const c = tinycolor(value);
    return {
      name: name,
      hex: c.toHexString()
      // darkContrast: c.isLight(),
    };
  }
  updateColor(color: string | null, key: string) {
    const pal = this.palette;
    if (this.automaticShades()) {
      const colors = this.computeColors(color ?? '');
      Object.entries(pal).forEach(([key, color]) => {
        if (typeof color !== 'string' && color !== null) {
          return;
        }
        color = colors.find((c) => c.name === key)?.hex || color;
        pal[key as keyof MaterialColors] = color;
      });
    } else {
      pal[key as keyof MaterialColors] = color;
    }
    this.paletteChange.emit(pal);
  }
  getBadge(hueKey: string) {
    return hueKey === '500' ? 'M' : hueKey === '100' ? 'L' : hueKey === '700' ? 'D' : '';
  }

  drop(event: CdkDragDrop<any>) {
    const hueTarget = (<HTMLElement>(<any>event.event).originalTarget).getAttribute('data-hue');
    const mark = event.item.element.nativeElement.getAttribute('data-mark') as any;
    // this.hueKeys.update((hueKeys) => {
    //   const oldHue = hueKeys.find((hueKey) => hueKey.marks.includes(mark));
    //   const newHue = hueKeys.find((hueKey) => hueKey.name === hueTarget);
    //   if (!newHue || !oldHue) {
    //     return hueKeys;
    //   }
    //   oldHue.marks = oldHue.marks.filter((hueKeyMark) => hueKeyMark !== mark);
    //   newHue.marks = [...newHue.marks, mark];
    //   return hueKeys;
    // });
  }
  getMarks(hueKey: string) {
    return [];
  }
  updateAutomaticShades(event: MatCheckboxChange) {
    this.automaticShades.set(event.checked);
  }
}
