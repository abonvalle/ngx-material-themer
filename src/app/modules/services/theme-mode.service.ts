import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Theme } from '../../../models/theme.interface';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themeMode: WritableSignal<'dark' | 'light'> = signal('light');
  isDarkMode = computed(() => this._themeMode() === 'dark');
  isLightMode = computed(() => this._themeMode() === 'light');

  currentTheme: WritableSignal<Theme> = signal({
    name: 'd&a',
    label: 'Deep Purple & Amber',
    palettes: [],
  });
  constructor() {}
  setThemeMode(mode: 'dark' | 'light') {
    this._themeMode.update((_) => mode);
  }
  toggleThemeMode() {
    this._themeMode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }
}
