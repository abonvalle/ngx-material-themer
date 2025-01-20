import { Injectable, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { computeColor, createPalette } from '../../../util-colors';
import { Color, colorTile, emptyPalette, marks } from '../../model';

@Injectable()
export class ColorPaletteService {
  palette: WritableSignal<Color[]> = signal(emptyPalette);
  mainColorTile: Signal<colorTile> = computed(() => this.palette().find((color) => color.name === '500') as any);
  colorsPreview: Signal<string[]> = computed(() =>
    this.palette()
      .filter((color) => color.hexCode !== null)
      .map((color) => color.hexCode as string)
  );
  colors: Signal<colorTile[]> = computed(() =>
    this.palette().map((color) => ({
      name: color.name,
      hexCode: color.hexCode,
      text: color.contrastRatio
        ? `Contrast ratio : ${color.contrastRatio > 7 ? 'AAA ✔' : color.contrastRatio > 4.5 ? 'AA ✔' : 'AA ✘'}`
        : '',
      textColor: color.contrastLight ? this.fontLight() : this.fontDark(),
      marks: color.marks ?? []
    }))
  );

  automaticShades = signal(true);
  fontLight = signal('');
  fontDark = signal('');
  constructor() {
    effect(
      () => {
        const light = this.fontLight(),
          dark = this.fontDark();
        this.palette.update((pal) =>
          pal.map((color) =>
            color.hexCode ? computeColor(color.hexCode, color.name, color.marks, light, dark) : color
          )
        );
      },
      { allowSignalWrites: true }
    );
  }

  updateTheme(colors: Color[], theme: string) {
    colors.forEach((color) => {
      document.documentElement.style.setProperty(`--theme-${theme}-${color.name}`, color.hexCode);
    });
  }
  updateLightFont(hexCode: string) {
    this.fontLight.set(hexCode);
  }
  updateDarkFont(hexCode: string) {
    this.fontDark.set(hexCode);
  }
  updatePalette(palette: Color[] | null) {
    const newPalette = palette ?? emptyPalette;
    console.log('updatePalette', newPalette);
    const test = newPalette.map((color) =>
      color.hexCode ? computeColor(color.hexCode, color.name, color.marks, this.fontLight(), this.fontDark()) : color
    );
    console.log('updatePalette', test);
    this.palette.set(palette ?? emptyPalette);
  }
  updateColor(hexCode: string | null, color: colorTile) {
    if (!['A100', 'A200', 'A400', 'A700'].includes(color.name) && this.automaticShades()) {
      if (!hexCode) {
        return;
      }
      const colors = createPalette(hexCode ?? '', this.fontLight(), this.fontDark());
      this.palette.set(colors);
    } else {
      console.warn('updateColor', hexCode, color.name, color);
      this.palette.update((pal) => {
        return pal.map((c) =>
          c.name === color.name ? computeColor(hexCode, color.name, color.marks, this.fontLight(), this.fontDark()) : c
        );
      });
    }
  }
  updateMark(mark: marks, key: string) {
    this.palette.update((pal) => {
      return pal.map((c) => {
        c.marks = c.marks?.includes(mark) ? c.marks?.filter((m) => m !== mark) : c.marks ?? [];
        return c.name === key ? { ...c, marks: [...c.marks, mark] } : c;
      });
    });
  }
  drop(colorName: string, mark: string) {}
  getMarks(hueKey: string) {
    return [];
  }
  updateAutomaticShades(event: MatCheckboxChange) {
    this.automaticShades.set(event.checked);
  }
}
