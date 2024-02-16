import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { VERSION } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { SimpleThemerComponent } from './feature-simple-themer/simple-themer.component';
import { ThemesService } from './shared/services/themes.service';

@Component({
  selector: 'app-theming',
  standalone: true,
  imports: [SimpleThemerComponent, MatDividerModule, MatIconModule, MatButtonModule],
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.scss'
})
export class ThemingComponent {
  @Input() appVersion = '';
  materialVersion = `${VERSION.major}.${VERSION.minor}`;
  isDarkMode = this._themeService.darkMode;
  constructor(private _themeService: ThemesService) {}
}
