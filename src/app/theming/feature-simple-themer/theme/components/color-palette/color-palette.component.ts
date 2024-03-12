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
  OnInit,
  Output,
  SimpleChanges,
  WritableSignal,
  inject,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HelpTooltipComponent } from '@app//theming/shared/help-tooltip/help-tooltip.component';
import { ColorPickerService } from '@app/shared/feature-color-picker/color-picker.service';
import { computeColor, createPalette } from '@app/theming/feature-simple-themer/util-colors';
import { debounceTime } from 'rxjs';
import { Color, colorTile, emptyPalette, marks } from '../../model';
import { MatColor } from '../../model/mat-color.interface';
import { ColorTileComponent } from '../color-tile/color-tile.component';
import { ColorPaletteConstants } from './color-palette.constants';
import { ColorPaletteService } from './color-palette.service';

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    HelpTooltipComponent,
    MatChipsModule,
    CdkDropList,
    CdkDrag,
    ColorTileComponent,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [ColorPaletteService],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPaletteComponent implements OnInit, OnChanges {
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) palette: Color[] = [];
  @Input() tooltip: string = '';
  @Input() fontLight: string = '';
  @Input() fontDark: string = '';
  @Output() paletteChange: EventEmitter<Color[]> = new EventEmitter();
  @Output() fontLightChange: EventEmitter<Color[]> = new EventEmitter();
  @Output() fontDarkChange: EventEmitter<Color[]> = new EventEmitter();
  colors: WritableSignal<colorTile[]> = signal(
    this.palette?.map((color) => ({
      name: color.name,
      hexCode: color.hexCode,
      text: color.contrastRatio
        ? `Contrast ratio : ${color.contrastRatio > 7 ? 'AAA ✔' : color.contrastRatio > 4.5 ? 'AA ✔' : 'AA ✘'}`
        : '',
      textColor: color.contrastLight ? this.fontLight : this.fontDark,
      marks: color.marks ?? []
    }))
  );
  colorsPreview = signal(
    this.palette?.filter((color) => color.hexCode !== null).map((color) => color.hexCode as string)
  );
  // automaticShades = this._colorPaletteService.automaticShades;
  mainColorTile = this._colorPaletteService.mainColorTile;
  destroyRef = inject(DestroyRef);
  constructor(
    public dialog: MatDialog,
    private _colorPaletteService: ColorPaletteService,
    private _colorPickerService: ColorPickerService,
    private _cdrRef: ChangeDetectorRef,
    public colorPaletteConstants: ColorPaletteConstants
  ) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['palette']) {
      console.log('<PALETTE CHANGE>', this.palette);
      this.colors.set(
        this.palette?.map((color) => ({
          name: color.name,
          hexCode: color.hexCode,
          text: color.contrastRatio
            ? `Contrast ratio : ${color.contrastRatio > 7 ? 'AAA ✔' : color.contrastRatio > 4.5 ? 'AA ✔' : 'AA ✘'}`
            : '',
          textColor: color.contrastLight ? this.fontLight : this.fontDark,
          marks: color.marks ?? []
        }))
      );
      this.colorsPreview.set(
        this.palette.filter((color) => color.hexCode !== null).map((color) => color.hexCode as string)
      );
    }
  }
  updateColor(hexCode: string | null, color: colorTile) {
    if (!hexCode) {
      return;
    }
    console.warn('updateColor', hexCode, color.name, color);
    this.paletteChange.emit(
      this.palette?.map((c) =>
        c.name === color.name ? computeColor(hexCode, color.name, color.marks, this.fontLight, this.fontDark) : c
      )
    );
  }

  drop(event: CdkDragDrop<any>) {
    const hueTarget = (<HTMLElement>event.event?.target)?.dataset['hue'] as string; //?.getAttribute('data-hue');
    const mark = event.item.element.nativeElement?.dataset['mark'] as marks;
    this._colorPaletteService.updateMark(mark, hueTarget);
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

  // updateAutomaticShades(event: MatCheckboxChange) {
  //   this._colorPaletteService.updateAutomaticShades(event);
  // }
  openColorPicker(event: MouseEvent) {
    event.stopPropagation();
    const colorChange = this._colorPickerService
      .openColorPicker(this.mainColorTile().hexCode, { x: event.x, y: event.y })
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(20))
      .subscribe({
        next: (value) => {
          this.setMainColor(value);
        },
        complete: () => {
          colorChange.unsubscribe();
        },
        error: (err) => {
          console.error('error', err);
          colorChange.unsubscribe();
        }
      });
  }
  setMainColor(color: string | null) {
    // this._colorPaletteService.updateColor(color, this.mainColorTile());
    const colors = createPalette(color ?? '', this.fontLight, this.fontDark);
    this.paletteChange.emit(colors);
    this._cdrRef.markForCheck();
  }
  setPalette(palette: MatColor[] | null) {
    // this._colorPaletteService.updatePalette(palette);
    // const newPalette = palette ?? emptyPalette;
    const newPal = palette?.map((color) =>
      computeColor(color.hexCode, color.name, color.marks, this.fontLight, this.fontDark)
    );
    // console.log('updatePalette', test);

    this.paletteChange.emit(newPal ?? emptyPalette);
    this._cdrRef.markForCheck();
  }
}
