import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-brick',
  standalone: true,
  imports: [CommonModule, ColorPickerComponent],
  templateUrl: './color-brick.component.html',
  styleUrl: './color-brick.component.scss',
})
export class ColorBrickComponent {
  @ViewChild('colorPicker') colorPicker!: ColorPickerComponent;
  @Input() color: string | null = null;
  @Output() colorChange = new EventEmitter<string>();
  openColorPicker() {
    this.colorPicker?.open();
  }
  updateColor(color: string) {
    this.color = color;
    this.colorChange.emit(color);
  }
}
