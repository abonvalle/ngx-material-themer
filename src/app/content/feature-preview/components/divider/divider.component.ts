import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss'
})
export class DividerComponent {
  label = 'Divider';
}
