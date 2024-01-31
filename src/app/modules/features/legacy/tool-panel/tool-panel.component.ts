import { Component } from '@angular/core';
import { ColorPickerComponent } from '../../../shared/color-picker/color-picker.component';
import { ColorPickerService } from '../../../shared/color-picker/color-picker.service';

@Component({
  selector: 'app-tool-panel',
  standalone: true,
  imports: [ColorPickerComponent],
  templateUrl: './tool-panel.component.html',
  styleUrl: './tool-panel.component.scss'
})
export class ToolPanelComponent {
  constructor(public toolPanelService: ColorPickerService) {}
}
