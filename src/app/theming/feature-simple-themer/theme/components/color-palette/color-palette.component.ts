import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  effect,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HelpTooltipComponent } from '@app//theming/shared/help-tooltip/help-tooltip.component';
import { ColorPickerService } from '@app/shared/feature-color-picker/color-picker.service';
import { Color, colorTile } from '../../model';
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
    MatCheckboxModule,
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
  @Input() palette: Color[] | null = null;
  @Input() tooltip: string = '';
  @Input() fontLight: string = '';
  @Input() fontDark: string = '';
  @Output() paletteChange: EventEmitter<Color[]> = new EventEmitter();
  colors = this._colorPaletteService.colors;
  colorsPreview = this._colorPaletteService.colorsPreview;
  automaticShades = this._colorPaletteService.automaticShades;
  mainColorTile = this._colorPaletteService.mainColorTile;
  destroyRef = inject(DestroyRef);
  constructor(
    public dialog: MatDialog,
    private _colorPaletteService: ColorPaletteService,
    private _colorPickerService: ColorPickerService,
    private _cdrRef: ChangeDetectorRef,
    private injector: Injector,
    public colorPaletteConstants: ColorPaletteConstants
  ) {}

  ngOnInit(): void {
    this._colorPaletteService.updateLightFont(this.fontLight);
    this._colorPaletteService.updateDarkFont(this.fontDark);
    this._colorPaletteService.updatePalette(this.palette);
    effect(
      () => {
        this.paletteChange.emit(this._colorPaletteService.palette());
      },
      { injector: this.injector, allowSignalWrites: true }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontLight']) {
      this._colorPaletteService.updateLightFont(this.fontLight);
    }
    if (changes['fontDark']) {
      this._colorPaletteService.updateDarkFont(this.fontDark);
    }
    if (changes['palette']) {
      this._colorPaletteService.updatePalette(this.palette);
    }
  }
  updateColor(hexCode: string | null, color: colorTile) {
    this._colorPaletteService.updateColor(hexCode, color);
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
  updateAutomaticShades(event: MatCheckboxChange) {
    this._colorPaletteService.updateAutomaticShades(event);
  }
  openColorPicker(event: MouseEvent) {
    event.stopPropagation();
    const colorChange = this._colorPickerService
      .openColorPicker(this.mainColorTile().hexCode, { x: event.x, y: event.y })
      .pipe(takeUntilDestroyed(this.destroyRef))
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
    this._colorPaletteService.updateColor(color, this.mainColorTile());
    this._cdrRef.markForCheck();
  }
  setPalette(palette: Color[] | null) {
    this._colorPaletteService.updatePalette(palette);
  }
}
