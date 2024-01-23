import { Component, Input, ViewChild, signal } from '@angular/core';
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
  @Input() color: string = '';
  openColorPicker() {
    this.colorPicker?.open();
  }
}
