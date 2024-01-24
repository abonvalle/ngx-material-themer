import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  private _themeMode: WritableSignal<'dark' | 'light'> = signal('light');
  isDarkMode = computed(() => this._themeMode() === 'dark');
  isLightMode = computed(() => this._themeMode() === 'light');

  constructor() {}
  setThemeMode(mode: 'dark' | 'light') {
    this._themeMode.update((_) => mode);
  }
  toggleThemeMode() {
    this._themeMode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }
}
