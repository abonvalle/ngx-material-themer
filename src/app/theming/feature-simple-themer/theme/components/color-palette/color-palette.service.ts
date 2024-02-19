import { Injectable, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { computeColor, createPalette } from '../../../util-colors';
import { Color, colorTile, emptyPalette } from '../../model';

@Injectable()
export class ColorPaletteService {
  palette: WritableSignal<Color[]> = signal(emptyPalette);
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
      marks: []
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
          pal.map((color) => (color.hexCode ? computeColor(color.hexCode, color.name, light, dark) : color))
        );
      },
      { allowSignalWrites: true }
    );
  }

  updateTheme(colors: Color[], theme: string) {
    colors.forEach((color) => {
      document.documentElement.style.setProperty(`--theme-${theme}-${color.name}`, color.hexCode);
      // document.documentElement.style.setProperty(
      // `--theme-${theme}-contrast-${color.name}`,
      // color.darkContrast ? 'rgba(black, 0.87)' : 'white'
      // );
    });
  }
  updateLightFont(hexCode: string) {
    this.fontLight.set(hexCode);
  }
  updateDarkFont(hexCode: string) {
    this.fontDark.set(hexCode);
  }
  updatePalette(palette: Color[] | null) {
    this.palette.set(palette ?? emptyPalette);
  }
  updateColor(hexCode: string | null, color: colorTile) {
    if (!['A100', 'A200', 'A400', 'A700'].includes(color.name) && this.automaticShades()) {
      if (!hexCode) {
        return;
      }
      const colors = createPalette(hexCode ?? '', this.fontLight(), this.fontDark());
      // const pal = this.palette();
      // Object.entries(pal).forEach(([key, color]) => {
      //   if (typeof color !== 'string' && color !== null) {
      //     return;
      //   }
      //   color = colors.find((c) => c.hue === key)?.colorHex || color;
      //   pal[key as keyof MaterialColors] = color;
      // });
      // console.log('pal', pal);
      // this.palette.set(Object.assign({}, pal));
      this.palette.set(colors);
    } else {
      // console.log('no automatic shades');
      // const pal = this.palette();
      // pal[color.name as keyof MaterialColors] = hexCode;
      // this.palette.set(pal);
      console.warn('updateColor', hexCode, color.name, color);
      this.palette.update((pal) => {
        return pal.map((c) =>
          c.name === color.name ? computeColor(hexCode, color.name, this.fontLight(), this.fontDark()) : c
        );
      });
      // pal[color.name as keyof MaterialColors] = hexCode;
      // return Object.assign({}, pal);
    }
  }

  drop(colorName: string, mark: string) {
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
