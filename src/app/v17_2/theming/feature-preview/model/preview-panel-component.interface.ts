import { ComponentType } from '@angular/cdk/overlay';

export interface PreviewPanelComponent {
  label: string;
  ref: ComponentType<unknown>;
  open?: boolean;
  additionnalLabels?: string[];
}
