import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Theme } from '../../../models/theme.interface';
import { ThemeComponent } from '@features/theme/theme.component';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  darkMode: WritableSignal<boolean> = signal(false);

  currentTheme: WritableSignal<Theme> = signal({
    name: 'd&a',
    label: 'Deep Purple & Amber',
    palettes: []
  });
  themes: WritableSignal<ThemeComponent[]> = signal([]);
  constructor() {}
  toggleDarkMode() {
    this.darkMode.update((mode) => !mode);
  }
  addTheme(theme: ThemeComponent) {
    this.themes.update((themes) => [...themes, theme]);
  }
  removeTheme(theme: ThemeComponent) {
    this.themes.update((themes) => themes.filter((t) => t.guid !== theme.guid));
  }
}
