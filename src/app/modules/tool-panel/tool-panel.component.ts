import { Component } from '@angular/core';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ToolPanelService } from './tool-panel.service';

@Component({
  selector: 'app-tool-panel',
  standalone: true,
  imports: [ColorPickerComponent],
  templateUrl: './tool-panel.component.html',
  styleUrl: './tool-panel.component.scss'
})
export class ToolPanelComponent {
  constructor(public toolPanelService: ToolPanelService) {}
}
