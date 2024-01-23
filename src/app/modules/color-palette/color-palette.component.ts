import { Component, Input, OnInit, Signal, signal } from '@angular/core';
import { ColorBrickComponent } from '../color-brick/color-brick.component';
import { CommonModule } from '@angular/common';
import { paletteKeys } from '../../../models/palette-keys.const';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [
    CommonModule,
    ColorBrickComponent,
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss',
})
export class ColorPaletteComponent implements OnInit {
  @Input({ required: true }) name!: string;
  expanded = signal(false);
  palette = new Map<string, string>();
  showLabel = signal(false);
  smoothHideTimeout: number | null = null;
  get mainColor() {
    return this.palette.get('500') || '';
  }
  constructor() {}
  ngOnInit(): void {
    paletteKeys.forEach((key) => {
      this.palette.set(key, '');
    });
  }
  toggleShowLabel(enter: boolean) {
    if (!enter) {
      //Smooth hide
      this.smoothHide();
    } else {
      this.smoothHideTimeout !== null &&
        window.clearTimeout(this.smoothHideTimeout);
      this.showLabel.update((_) => true);
    }
  }
  smoothHide() {
    this.smoothHideTimeout !== null &&
      window.clearTimeout(this.smoothHideTimeout);

    this.smoothHideTimeout = window.setTimeout(() => {
      this.showLabel.update((_) => false);
    }, 500);
  }
  setExpanded(value: boolean) {
    this.showLabel.update((_) => false);
    this.expanded.update((_) => value);
  }
}
