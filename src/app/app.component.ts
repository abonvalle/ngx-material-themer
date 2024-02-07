import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { PreviewPanelComponent } from '@features/preview-panel/preview-panel.component';
import { ThemerPanelComponent } from '@features/themer-panel/themer-panel.component';
import { ThemesService } from '@modules/shared/services/themes.service';
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
  constructor(private _themeService: ThemesService) {}
}
