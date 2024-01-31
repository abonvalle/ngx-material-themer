import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  computed,
  inject,
  signal
} from '@angular/core';
import { ColorBrickComponent } from '../color-brick/color-brick.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Color } from '../../../../models/color.interface';
import { MaterialPalette } from '@models/material/material-palette.interface';
import { MaterialColors } from '@models/material/material-colors.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import { emptyPalette } from '@models/empty-palette.const';
import { HelpTooltipComponent } from '@modules/shared/help-tooltip/help-tooltip.component';
import { ConfigService } from '@modules/services/config.service';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog } from '@angular/material/dialog';
import { DefaultHueDialogComponent } from './default-hue-dialog/default-hue-dialog.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

declare const tinycolor: any;
const noPal: MaterialPalette = Object.assign({}, emptyPalette);

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule, ColorBrickComponent, MatExpansionModule, MatIconModule, HelpTooltipComponent],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPaletteComponent {
  @Input({ required: true }) name: string = '';
  @Input() tooltip: string = '';
  @Input({ required: true }) palette: WritableSignal<MaterialPalette> = signal(noPal);
  @Output() paletteChange: EventEmitter<WritableSignal<MaterialPalette>> = new EventEmitter();
  expanded = signal(false);
  showLabel = signal(false);
  smoothHideTimeout: number | null = null;
  paletteColors = computed(() => {
    const colors: Partial<MaterialPalette> = this.palette();
    delete colors.contrast;
    return colors as MaterialColors;
  });
  hideHelpTooltips = this._configService.hideHelpTooltips;
  destroyRef = inject(DestroyRef);
  lighterColor = '';
  defaultColor = '';
  textColor = '';
  darkerColor = '';
  constructor(
    private _cdrRef: ChangeDetectorRef,
    private _configService: ConfigService,
    public dialog: MatDialog
  ) {}

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
      Object.entries(pal).map(([key, color]) => {
        if (typeof color !== 'string') {
          return;
        }
        pal[key as keyof MaterialColors] = paletteColors.find((c) => c.name === key)?.hex || color;
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
      pal[key as keyof MaterialColors] = color;
      return pal;
    });
  }
  getBadge(hueKey: string) {
    return hueKey === '500' ? 'M' : hueKey === '100' ? 'L' : hueKey === '700' ? 'D' : '';
  }
  updateDefaultsHues() {
    this.openDefaultHuesDialog();
    //opendialog with hue & label draggable chips
  }
  openDefaultHuesDialog(): void {
    const dialogRef = this.dialog.open(DefaultHueDialogComponent, {
      data: { name: this.name, palette: this.palette() }
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        console.log('The dialog was closed');
      });
  }
}
