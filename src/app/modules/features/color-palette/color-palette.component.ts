import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  computed,
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
import { MaterialColors } from '@models/material/material-colors.interface';
import { MatTooltipModule } from '@angular/material/tooltip';

declare const tinycolor: any;

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule, ColorBrickComponent, MatExpansionModule, MatIconModule, MatTooltipModule],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPaletteComponent {
  @Input({ required: true }) palette!: WritableSignal<Palette>;
  @Output() paletteChange: EventEmitter<WritableSignal<Palette>> = new EventEmitter();
  expanded = signal(false);
  paletteOLD = new Map<string, string>();
  showLabel = signal(false);
  smoothHideTimeout: number | null = null;
  paletteColors = computed(() => {
    const colors: Partial<MaterialPalette> = this.palette().colors;
    delete colors.contrast;
    return colors as MaterialColors;
  });

  constructor(private _cdrRef: ChangeDetectorRef) {}

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
    this.palette.update((pal) => {
      Object.entries(pal.colors).map(([key, color]) => {
        if (typeof color !== 'string') {
          return;
        }
        pal.colors[key as keyof MaterialColors] = paletteColors.find((c) => c.name === key)?.hex || color;
      });
      return pal;
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
  updateColor(color: string, key: string) {
    this.palette.update((pal) => {
      pal.colors[key as keyof MaterialColors] = color;
      return pal;
    });
  }
}
