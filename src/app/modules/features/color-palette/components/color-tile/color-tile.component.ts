import { CdkDrag } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { ColorPickerComponent } from '@modules/shared/color-picker/color-picker.component';
import { ColorPickerService } from '@modules/shared/color-picker/color-picker.service';
import { hueKeysMark } from '../../model';

@Component({
  selector: 'app-color-tile',
  standalone: true,
  imports: [MatChipsModule, CdkDrag, ColorPickerComponent, MatMenuModule],
  templateUrl: './color-tile.component.html',
  styleUrl: './color-tile.component.scss'
})
export class ColorTileComponent {
  @Input({ required: true }) color!: string;
  @Input({ required: true }) colorName!: string;
  @Input({ required: true }) marks: hueKeysMark[] = [];
  @Output() colorChange: EventEmitter<string> = new EventEmitter();
  constructor(
    private _toolPanelService: ColorPickerService,
    private _cdrRef: ChangeDetectorRef
  ) {}
  editColor(event: Event) {
    event.stopPropagation();
    this._toolPanelService.currentElement.set(this);
  }
  setColor(color: string) {
    this.color = color;
    this.colorChange.emit(this.color);
    this._cdrRef.markForCheck();
  }
}
