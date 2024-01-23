import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { ColorBrickComponent } from '../color-brick/color-brick.component';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-themer-panel',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ColorPickerComponent,
    ColorBrickComponent,
    ColorPaletteComponent,
    MatSelectModule,
  ],
  templateUrl: './themer-panel.component.html',
  styleUrl: './themer-panel.component.scss',
})
export class ThemerPanelComponent {
  themes = [
    { value: 'd&a', label: 'Deep Purple & Amber' },
    { value: 'dark', label: 'Indigo & Pink' },
    { value: 'light', label: 'Pink & Blue-grey' },
    { value: 'purple', label: 'Purple & Green' },
    { value: 'custom', label: 'Custom' },
  ];
}
