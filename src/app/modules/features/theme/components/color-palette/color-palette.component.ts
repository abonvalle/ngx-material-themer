import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  effect
} from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { colorTile } from '@features/theme/model';
import { Color } from '@features/theme/model/color.interface';
import { HelpTooltipComponent } from '@modules/shared/help-tooltip/help-tooltip.component';
import { ColorTileComponent } from '../color-tile/color-tile.component';
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
    MatCheckboxModule
  ],
  providers: [ColorPaletteService],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPaletteComponent implements OnInit, OnChanges {
  @Input({ required: true }) name: string = '';
  @Input() defaultColor: string | null = null;
  @Input() tooltip: string = '';
  @Input() fontLight: string = '';
  @Input() fontDark: string = '';
  @Output() paletteChange: EventEmitter<Color[]> = new EventEmitter();
  colors = this._colorPaletteService.colors;
  colorsPreview = this._colorPaletteService.colorsPreview;
  automaticShades = this._colorPaletteService.automaticShades;
  constructor(
    public dialog: MatDialog,
    private _colorPaletteService: ColorPaletteService,
    private _cdrRef: ChangeDetectorRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this._colorPaletteService.updateLightFont(this.fontLight);
    this._colorPaletteService.updateDarkFont(this.fontDark);
    this._colorPaletteService.updateColor(
      this.defaultColor,
      this.colors().find((color) => color.name === '500') as colorTile
    );
    effect(
      () => {
        this.paletteChange.emit(this._colorPaletteService.palette());
      },
      { injector: this.injector }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontLight']) {
      this._colorPaletteService.updateLightFont(this.fontLight);
    }
    if (changes['fontDark']) {
      this._colorPaletteService.updateDarkFont(this.fontDark);
    }
    if (changes['defaultColor']) {
      this._colorPaletteService.updateColor(
        this.defaultColor,
        this.colors().find((color) => color.name === '500') as colorTile
      );
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
}
