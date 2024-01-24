import {
  Component,
  EventEmitter,
  Input,
  Output,
  effect,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ColorPaletteComponent],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) label!: string;
  @Output() nameChange = new EventEmitter<string>();
  constructor() {}
  updateName(inptEvent: Event) {
    const name = (<HTMLInputElement>inptEvent?.target)?.value;
    this.nameChange.emit(name);
  }
}
