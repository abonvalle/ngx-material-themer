import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfigService } from '@modules/services/config.service';

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
  readonly hideTooltips = this._configService.hideHelpTooltips;
  constructor(private _configService: ConfigService) {}
}
