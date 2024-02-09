import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import packageJSON from '../../../package.json';
import { PreviewPanelComponent } from './theming/feature-preview/preview-panel.component';
import { ThemerPanelComponent } from './theming/feature-simple-themer/themer-panel.component';
import { ThemesService } from './theming/shared/services/themes.service';

@Component({
  selector: 'app-v17_2',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ThemerPanelComponent, PreviewPanelComponent, MatSidenavModule],
  templateUrl: './v17_2.component.html',
  styleUrl: './v17_2.component.scss'
})
export class V17_2Component {
  isDarkMode = this._themeService.darkMode;
  appVersion = packageJSON.version.slice(-packageJSON.version.lastIndexOf('.'));
  constructor(private _themeService: ThemesService) {}
}
