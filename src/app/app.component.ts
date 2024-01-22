import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemerPanelComponent } from './modules/themer-panel/themer-panel.component';
import { ShowcasePanelComponent } from './modules/showcase-panel/showcase-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
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
}
