import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal
} from '@angular/core';
import { ColorBrickComponent } from '../color-brick/color-brick.component';
import { CommonModule } from '@angular/common';
import { hueKeys } from '../../../../models/hue-keys.const';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Color } from '../../../../models/color.interface';
import { Palette } from '@models/palette.interface';
import { MaterialPalette } from '@models/material/material-palette.interface';
import { MaterialHue } from '@models/material/material-hue.type';
import { MaterialColors } from '@models/material/material-colors.interface';

declare const tinycolor: any;

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule, ColorBrickComponent, MatExpansionModule, MatIconModule],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPaletteComponent implements OnInit {
  @Input({ required: true }) palette!: WritableSignal<Palette>;
  @Output() paletteChange: EventEmitter<WritableSignal<Palette>> = new EventEmitter();
  expanded = signal(false);
  paletteOLD = new Map<string, string>();
  showLabel = signal(false);
  smoothHideTimeout: number | null = null;
  mainColor = this.paletteOLD.get('500') || '';
  paletteColors = computed(() => {
    const colors: Partial<MaterialPalette> = this.palette().colors;
    // .filter((color) => this.notContrast(color));
    delete colors.contrast;
    return colors as MaterialColors;
  });

  constructor(private _cdrRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    // hueKeys.forEach((key) => {
    //   this.paletteOLD.set(key, '');
    // });
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
  // updateColor(color: string, key: string) {
  //   this.palette.update((pal) => (pal.key = color));
  //   this.mainColor = this.paletteOLD.get('500') || '';
  // }
  updatePaletteColors(colors: string) {
    const paletteColors = this.computeColors(colors);
    hueKeys.forEach((key, index) => {
      this.paletteOLD.set(key, paletteColors[index].hex);
    });
    this.mainColor = this.paletteOLD.get('500') || '';
  }
  updatePalette(color: string) {
    const paletteColors = this.computeColors(color);
    this.palette.update((pal) => {
      Object.entries(pal.colors).map(([key, color]) => {
        if (typeof color !== 'string') {
          return;
        }
        pal.colors[key as keyof MaterialColors] = paletteColors.find((c) => c.name === key)?.hex || color;
      });
      return pal;
    });
    // hueKeys.forEach((key, index) => {
    //   this.paletteOLD.set(key, paletteColors[index].hex);
    // });
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
    return [
      this.getColorObject(tinycolor(hex).lighten(52), '50'),
      this.getColorObject(tinycolor(hex).lighten(37), '100'),
      this.getColorObject(tinycolor(hex).lighten(26), '200'),
      this.getColorObject(tinycolor(hex).lighten(12), '300'),
      this.getColorObject(tinycolor(hex).lighten(6), '400'),
      this.getColorObject(tinycolor(hex), '500'),
      this.getColorObject(tinycolor(hex).darken(6), '600'),
      this.getColorObject(tinycolor(hex).darken(12), '700'),
      this.getColorObject(tinycolor(hex).darken(18), '800'),
      this.getColorObject(tinycolor(hex).darken(24), '900'),
      this.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      this.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      this.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      this.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ];
  }

  getColorObject(value: any, name: string): Color {
    const c = tinycolor(value);
    return {
      name: name,
      hex: c.toHexString()
      // darkContrast: c.isLight(),
    };
  }
  notContrast(color: MaterialPalette[keyof MaterialPalette]) {
    return typeof color === 'string';
  }
  updateColor(color: string, key: string) {
    this.palette.update((pal) => {
      pal.colors[key as keyof MaterialColors] = color;
      return pal;
    });
  }
}
