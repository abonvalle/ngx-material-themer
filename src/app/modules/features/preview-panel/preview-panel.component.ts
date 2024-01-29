import { Component, DestroyRef, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DividerComponent } from './components/divider/divider.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { IconComponent } from './components/icon/icon.component';
import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SortHeaderComponent } from './components/sort-header/sort-header.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TreeComponent } from './components/tree/tree.component';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith, takeUntil } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
const components = [
  { label: 'Buttons', ref: ButtonsComponent, open: true },
  { label: 'Inputs', ref: InputsComponent },
  { label: 'Stepper', ref: StepperComponent },
  { label: 'Badge', ref: BadgeComponent },
  { label: 'Bottom Sheet', ref: BottomSheetComponent },
  { label: 'Card', ref: CardComponent },
  { label: 'Checkbox', ref: CheckboxComponent },
  { label: 'Chips', ref: ChipsComponent },
  { label: 'Dialog', ref: DialogComponent },
  { label: 'Divider', ref: DividerComponent },
  { label: 'Expansion Panel', ref: ExpansionPanelComponent },
  { label: 'Icon', ref: IconComponent },
  { label: 'List', ref: ListComponent },
  { label: 'Menu', ref: MenuComponent },
  { label: 'Paginator', ref: PaginatorComponent },
  { label: 'Progress Bar', ref: ProgressBarComponent },
  { label: 'Progress Spinner', ref: ProgressSpinnerComponent },
  { label: 'Radio Button', ref: RadioButtonComponent },
  { label: 'Sidenav', ref: SidenavComponent },
  { label: 'Slide Toggle', ref: SlideToggleComponent },
  { label: 'Slider', ref: SliderComponent },
  { label: 'Snackbar', ref: SnackbarComponent },
  { label: 'Sort Header', ref: SortHeaderComponent },
  { label: 'Table', ref: TableComponent },
  { label: 'Tabs', ref: TabsComponent },
  { label: 'Toolbar', ref: ToolbarComponent },
  { label: 'Tooltip', ref: TooltipComponent },
  { label: 'Tree', ref: TreeComponent }
];
@Component({
  selector: 'app-preview-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    DynamicContentComponent,
    ButtonsComponent,
    InputsComponent,
    StepperComponent,
    BadgeComponent,
    BottomSheetComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    IconComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './preview-panel.component.html',
  styleUrl: './preview-panel.component.scss'
})
export class PreviewPanelComponent implements OnInit {
  components: { label: string; ref: unknown; open?: boolean }[] = components;
  myControl = new FormControl('');
  options: string[] = components.map((component) => component.label);
  filteredOptions: WritableSignal<string[]> = signal([]);
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.myControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        startWith(''),
        map((value) => this._filter(value || ''))
      )
      .subscribe((value) => {
        this.filteredOptions.set(value);
      });
  }
  onInput(evt: Event) {
    const value = (<HTMLInputElement>evt.target).value;
    const filteredComponents = components.filter((component) =>
      component.label.toLowerCase().includes(value.toLowerCase())
    );
    this.components = this.components.sort((a, b) => {
      if (
        filteredComponents.length > 0 &&
        filteredComponents[0].label.includes(a.label) &&
        !filteredComponents[0].label.includes(b.label)
      ) {
        return -1;
      } else if (!filteredComponents[0].label.includes(a.label) && filteredComponents[0].label.includes(b.label)) {
        return 1;
      } else if (a.label > b.label) {
        return 1;
      } else if (a.label < b.label) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }
  onOptSelected(opt: MatAutocompleteSelectedEvent) {
    this.components = this.components.sort((a, b) => {
      if (a.label === opt.option.value) {
        return -1;
      } else if (b.label === opt.option.value) {
        return 1;
      } else if (a.label > b.label) {
        return 1;
      } else if (a.label < b.label) {
        return -1;
      } else {
        return 0;
      }
    });

    this.components.map((component) => {
      if (component.label === opt.option.value) {
        component.open = true;
      } else {
        component.open = false;
      }
    });
  }
}
