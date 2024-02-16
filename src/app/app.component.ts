import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import packageJSON from '../../package.json';
import { PreviewComponent } from './content/feature-preview/preview.component';
import { ColorPickerComponent } from './shared/feature-color-picker/color-picker.component';
import { ThemingComponent } from './theming/theming.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ThemingComponent, PreviewComponent, MatSidenavModule, ColorPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-material-themer';
  appVersion = packageJSON.version.slice(0, -packageJSON.version.lastIndexOf('.') + 1);
  constructor() {}
}
