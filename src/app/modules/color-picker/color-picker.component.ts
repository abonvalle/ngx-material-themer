import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  ViewChild,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import iro from '@jaames/iro';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent implements AfterViewInit {
  @ViewChild('picker') picker!: ElementRef<HTMLElement>;
  @ViewChild('main') main!: ElementRef<HTMLElement>;
  @Input() color: string | null = null;
  private _color: string;
  @Output() colorChange = new EventEmitter<string>();
  closed = signal(true);
  colorPicker!: iro.ColorPicker;
  get colorHex() {
    return this.colorPicker?.color?.hexString ?? '';
  }
  get colorRGB() {
    return this.colorPicker?.color?.rgbString ?? '';
  }
  get colorHsl() {
    return this.colorPicker?.color?.hslString ?? '';
  }

  constructor(private _cdr: ChangeDetectorRef) {
    this._color = this.color ?? '#ffffff';
  }
  @ViewChild('picker') pickerRef!: ElementRef<HTMLElement>;
  ngAfterViewInit() {
    //@ts-ignore
    this.colorPicker = new iro.ColorPicker(this.pickerRef?.nativeElement, {
      width: 120,
      color: this._color,
      layoutDirection: 'horizontal',
      sliderSize: 10,
      borderWidth: 1,
      borderColor: '#fff',
    });
    this._cdr.markForCheck();

    this.colorPicker.on('color:change', (color: any) => {
      this.main.nativeElement.focus();
      this._color = color.hexString;
      this.colorChange.emit(color.hexString);
      this._cdr.markForCheck();
    });
  }
  updateColor(color: any) {
    try {
      this.colorPicker?.color?.set(color?.target?.value ?? '');
    } catch (e) {}
  }
  removeColor() {
    this._color = '';
    this.colorChange.emit('');
    this._cdr.markForCheck();
    this.close();
  }
  close() {
    console.warn('close');
    this.closed.update((_) => true);
  }
  open() {
    this.main.nativeElement.focus();
    this.closed.update((_) => false);
  }
}
