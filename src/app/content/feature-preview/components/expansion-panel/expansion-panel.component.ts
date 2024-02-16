import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export class ExpansionPanelComponent {
  label = 'Expansion Panel';
  panelOpenState = false;
}
