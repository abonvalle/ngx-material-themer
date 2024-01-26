import { Component, DestroyRef, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ColorPaletteComponent } from '@features/color-palette/color-palette.component';
import { emptyPalette } from '@models/empty-palette.const';
import { Palette } from '@models/palette.interface';
import { ThemesService } from '@modules/services/themes.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ColorPaletteComponent, MatIconModule, MatSlideToggle],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) label!: string;
  @Output() nameChange = new EventEmitter<string>();
  guid = Math.random().toString(36).substring(2);
  isLightTheme = signal(false);
  primaryPal: WritableSignal<Palette> = signal({ name: 'primary', colors: Object.assign({}, emptyPalette) });
  accentPal: WritableSignal<Palette> = signal({ name: 'accent', colors: Object.assign({}, emptyPalette) });
  warnPal: WritableSignal<Palette> = signal({ name: 'warn', colors: Object.assign({}, emptyPalette) });
  constructor(
    private _destroyRef: DestroyRef,
    private _themesService: ThemesService
  ) {
    this._themesService.addTheme(this);
    this._destroyRef.onDestroy(() => {
      this._themesService.removeTheme(this);
    });
  }
  updateName(inptEvent: Event) {
    const name = (<HTMLInputElement>inptEvent?.target)?.value;
    this.nameChange.emit(name);
  }
  updateTheme(value: MatSlideToggleChange) {
    this.isLightTheme.set(value.checked);
  }
}
