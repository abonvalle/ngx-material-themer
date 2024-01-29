import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  label = 'Radio Button';
}
