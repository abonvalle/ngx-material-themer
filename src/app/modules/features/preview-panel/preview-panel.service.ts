import { Injectable } from '@angular/core';
import { PreviewPanelComponent } from '@models/preview-panel-component.interface';
import {
  BadgeComponent,
  BottomSheetComponent,
  ButtonsComponent,
  CardComponent,
  CheckboxComponent,
  ChipsComponent,
  DialogComponent,
  DividerComponent,
  ExpansionPanelComponent,
  IconComponent,
  InputsComponent,
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
  StepperComponent,
  TableComponent,
  TabsComponent,
  ToolbarComponent,
  TooltipComponent,
  TreeComponent
} from './components';

@Injectable({
  providedIn: 'root'
})
export class PreviewPanelService {
  components: PreviewPanelComponent[] = [
    { label: 'Buttons', ref: ButtonsComponent, open: true, additionnalLabels: ['Button Toggle'] },
    { label: 'Inputs', ref: InputsComponent, additionnalLabels: ['Datepicker', 'Select', 'Textarea', 'Autocomplete'] },
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
  autoCompleteOptions = this.components
    .map((component) => [component.label, ...(component.additionnalLabels || [])])
    .flat();
  constructor() {}
  filterOpts(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.autoCompleteOptions.filter((option) => option.toLowerCase().includes(filterValue));
  }
  sortComponentsOnInput(c: PreviewPanelComponent[], value: string) {
    const filteredComponents = this.components.filter(
      (component) =>
        component.label.toLowerCase().includes(value.toLowerCase()) ||
        component.additionnalLabels?.map((l) => l.toLowerCase())?.includes(value.toLowerCase())
    );
    return c.sort((a, b) => {
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
  sortComponentsOnSelect(c: PreviewPanelComponent[], value: string) {
    c = c.sort((a, b) => {
      if (a.label === value || a.additionnalLabels?.includes(value)) {
        return -1;
      } else if (b.label === value || b.additionnalLabels?.includes(value)) {
        return 1;
      } else if (a.label > b.label) {
        return 1;
      } else if (a.label < b.label) {
        return -1;
      } else {
        return 0;
      }
    });

    return c.map((component) => {
      if (component.label === value || component.additionnalLabels?.includes(value)) {
        component.open = true;
      } else {
        component.open = false;
      }
      return component;
    });
  }
}
