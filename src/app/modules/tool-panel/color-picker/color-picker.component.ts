import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  Signal,
  ViewChild,
  computed,
  effect,
  signal
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import iro from '@jaames/iro';
import { ToolPanelService } from '../tool-panel.service';
import { debounce } from '@shared/utils';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatTooltipModule, MatSlideToggleModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent implements AfterViewInit {
  @ViewChild('picker') pickerRef!: ElementRef<HTMLElement>;
  @Input() showContrastOptions = false;
  private _color: Signal<string | undefined> = computed(() => {
    console.warn('compute _color');
    return this._toolPanelService.currentElement()?.color || undefined;
  });
  closed = signal(true);
  colorPicker!: iro.ColorPicker;
  automaticContrast = signal(true);
  get colorHex() {
    return this.colorPicker?.color?.hexString ?? '';
  }
  get colorRGB() {
    return this.colorPicker?.color?.rgbString ?? '';
  }
  get colorHsl() {
    return this.colorPicker?.color?.hslString ?? '';
  }

  constructor(
    private _cdr: ChangeDetectorRef,
    private _toolPanelService: ToolPanelService,
    private _eltRef: ElementRef
  ) {
    effect(
      () => {
        if (!this._color()) {
          this.colorPicker.reset();
          this._cdr.markForCheck();
          return;
        }
        //@ts-ignore
        this.colorPicker?.color?.set(this._color());
        this._cdr.markForCheck();
      },
      { allowSignalWrites: true }
    );
  }

  ngAfterViewInit() {
    //@ts-ignore
    this.colorPicker = new iro.ColorPicker(this.pickerRef?.nativeElement, {
      width: 120,
      color: this._color(),
      layoutDirection: 'horizontal',
      sliderSize: 10,
      borderWidth: 1,
      borderColor: '#fff'
    });
    this._cdr.markForCheck();

    this.colorPicker.on(
      'color:change',
      debounce((color: any) => {
        // this._color = color.hexString;
        this._toolPanelService.updateCurrentElementColor(color.hexString);
        // this.colorChange.emit(color.hexString);
        // this._cdr.markForCheck();
      }, 5)
    );
  }
  updateColor(color: any) {
    try {
      this.colorPicker?.color?.set(color?.target?.value ?? '');
    } catch (e) {}
  }
  removeColor() {
    this._toolPanelService.updateCurrentElementColor(null);
    // this._color = '';
    // this.colorChange.emit('');
    // this._cdr.markForCheck();
    // this.close();
  }
  // close() {
  // console.warn('close');
  // this.closed.update((_) => true);
  // }
  // open() {
  // this.closed.update((_) => false);
  // }
  updateAutomaticContrast(event: MatCheckboxChange) {
    this.automaticContrast.update((_) => event.checked);
  }
  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent) {
  //   if (this._eltRef.nativeElement.contains(event.target)) {
  //     return;
  //   }
  //   console.warn('onClick doc ', this._toolPanelService.currentElement());
  //   if (this._toolPanelService.currentElement()) {
  //     this._toolPanelService.currentElement.set(null);
  //   }
  // }
}
