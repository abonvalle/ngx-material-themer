import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import packageJSON from '../../package.json';
import { PreviewPanelComponent } from './/content/feature-preview/preview-panel.component';
import { ThemerPanelComponent } from './/theming/feature-simple-themer/themer-panel.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ThemerPanelComponent,
    PreviewPanelComponent,
    MatSidenavModule,
    ColorPickerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-material-themer';
  appVersion = packageJSON.version.slice(0, -packageJSON.version.lastIndexOf('.') + 1);
  constructor() {}
}
