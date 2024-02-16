import { ComponentType } from '@angular/cdk/overlay';

export interface PreviewComponent {
  label: string;
  ref: ComponentType<unknown>;
  open?: boolean;
  additionnalLabels?: string[];
}
