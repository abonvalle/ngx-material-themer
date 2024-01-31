import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { PreviewPanelComponent } from '@features/preview-panel/preview-panel.component';
import { ThemerPanelComponent } from '@features/themer-panel/themer-panel.component';
import { Color } from '../models/color.interface';
import { ThemesService } from './modules/services/themes.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ThemerPanelComponent, PreviewPanelComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-material-themer';
  isDarkMode = this._themeService.darkMode;
  constructor(private _themeService: ThemesService) {
    effect(() => {
      // this._paletteService.currentPalette();
    });
  }
  updateTheme(colors: Color[], theme: string) {
    colors.forEach((color) => {
      document.documentElement.style.setProperty(`--theme-${theme}-${color.name}`, color.hex);
      // document.documentElement.style.setProperty(
      //   `--theme-${theme}-contrast-${color.name}`,
      //   color.darkContrast ? 'rgba(black, 0.87)' : 'white'
      // );
    });
  }
}
