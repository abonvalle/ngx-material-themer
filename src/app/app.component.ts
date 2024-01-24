import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemerPanelComponent } from './modules/themer-panel/themer-panel.component';
import { ShowcasePanelComponent } from './modules/showcase-panel/showcase-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from './modules/services/theme-mode.service';
import { Color } from '../models/color.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ThemerPanelComponent,
    ShowcasePanelComponent,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-material-themer';
  isDarkMode = this._themeService.isDarkMode;
  constructor(private _themeService: ThemeService) {
    effect(() => {
      // this._paletteService.currentPalette();
    });
  }
  updateTheme(colors: Color[], theme: string) {
    colors.forEach((color) => {
      document.documentElement.style.setProperty(
        `--theme-${theme}-${color.name}`,
        color.hex
      );
      // document.documentElement.style.setProperty(
      //   `--theme-${theme}-contrast-${color.name}`,
      //   color.darkContrast ? 'rgba(black, 0.87)' : 'white'
      // );
    });
  }
}
