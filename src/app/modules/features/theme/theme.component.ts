import { Component, EventEmitter, Input, Output, effect, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ColorPaletteComponent } from '@features/color-palette/color-palette.component';

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
  isLightTheme = signal(false);
  constructor() {}
  updateName(inptEvent: Event) {
    const name = (<HTMLInputElement>inptEvent?.target)?.value;
    this.nameChange.emit(name);
  }
  updateTheme(value: MatSlideToggleChange) {
    this.isLightTheme.set(value.checked);
  }
}
