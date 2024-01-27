import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-help-tooltip',
  standalone: true,
  imports: [MatTooltipModule, MatIconModule],
  templateUrl: './help-tooltip.component.html',
  styleUrl: './help-tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpTooltipComponent {
  @Input({ required: true }) tooltip = '';
}
