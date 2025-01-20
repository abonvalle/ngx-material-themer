import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { VERSION } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ThemesService } from '../../shared/services/themes.service';

import { PresetTheme } from '../model/preset-theme.interface';
import { Color } from './theme/model';
import { SimpleThemeComponent } from './theme/simple-theme.component';
import { computeColor } from './util-colors';
@Component({
  selector: 'app-simple-themer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule, SimpleThemeComponent],
  templateUrl: './simple-themer.component.html',
  styleUrl: './simple-themer.component.scss'
})
export class SimpleThemerComponent implements OnChanges {
  @Input() appVersion = '';
  @Input({ required: true }) currentTheme!: PresetTheme;
  cssMode: 'CSS' | 'SASS' | 'LESS' = 'CSS';

  currentPrimaryPal: Color[] = [];
  currentAccentPal: Color[] = [];
  currentWarnPal: Color[] = [];
  isDarkMode = this._themeService.darkMode;
  materialVersion = `${VERSION.major}.${VERSION.minor}`;
  constructor(
    public dialog: MatDialog,
    private _themeService: ThemesService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentTheme']) {
      this.currentPrimaryPal = this.currentTheme.primary.map((c) =>
        computeColor(c.hexCode, c.name, c.marks, '#ffffff', '#000000')
      );
      this.currentAccentPal = this.currentTheme.accent.map((c) =>
        computeColor(c.hexCode, c.name, c.marks, '#ffffff', '#000000')
      );
      this.currentWarnPal = this.currentTheme.warn.map((c) =>
        computeColor(c.hexCode, c.name, c.marks, '#ffffff', '#000000')
      );
    }
  }
}
