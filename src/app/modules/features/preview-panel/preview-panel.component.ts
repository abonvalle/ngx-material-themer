import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-preview-panel',
  standalone: true,
  imports: [
    MatExpansionModule,
    ToolbarComponent,
    InputsComponent,
    StepperComponent,
    BadgeComponent,
    BottomSheetComponent
  ],
  templateUrl: './preview-panel.component.html',
  styleUrl: './preview-panel.component.scss'
})
export class PreviewPanelComponent {
  constructor() {}
}
