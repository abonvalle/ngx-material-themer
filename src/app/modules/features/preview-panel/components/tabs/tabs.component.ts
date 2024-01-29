import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatButtonToggleModule, MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  label = 'Tabs';
}
