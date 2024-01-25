import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  signal
} from '@angular/core';
import { ColorPickerComponent } from '../../tool-panel/color-picker/color-picker.component';
import { CommonModule } from '@angular/common';
import { ToolPanelService } from '../../tool-panel/tool-panel.service';

@Component({
  selector: 'app-color-brick',
  standalone: true,
  imports: [CommonModule, ColorPickerComponent],
  templateUrl: './color-brick.component.html',
  styleUrl: './color-brick.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorBrickComponent {
  color: WritableSignal<string | null> = signal(null);
  constructor(
    private _toolPanelService: ToolPanelService,
    private _cdrRef: ChangeDetectorRef
  ) {}
  editColor(event: Event) {
    event.stopPropagation();
    this._toolPanelService.currentElement.set(this);
  }
  setColor(color: string | null) {
    this.color.set(color);
    this._cdrRef.markForCheck();
  }
}
