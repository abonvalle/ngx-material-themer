import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PreviewPanelComponent as PreviewPanelComponentInterface } from '@models/preview-panel-component.interface';
import { map, startWith } from 'rxjs';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { PreviewPanelService } from './preview-panel.service';
@Component({
  selector: 'app-preview-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    DynamicContentComponent,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './preview-panel.component.html',
  styleUrl: './preview-panel.component.scss'
})
export class PreviewPanelComponent implements OnInit {
  components: WritableSignal<PreviewPanelComponentInterface[]> = signal(this.previewPanelService.components);
  myControl = new FormControl('');
  filteredOptions: WritableSignal<string[]> = signal([]);
  destroyRef = inject(DestroyRef);
  constructor(public previewPanelService: PreviewPanelService) {}
  ngOnInit() {
    this.myControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        startWith(''),
        map((value) => this.previewPanelService.filterOpts(value || ''))
      )
      .subscribe((value) => {
        this.filteredOptions.set(value);
      });
  }
  onInput(evt: Event) {
    const value = (<HTMLInputElement>evt.target).value;
    this.components.update((c) => this.previewPanelService.sortComponentsOnInput(c, value));
  }

  onOptSelected(opt: MatAutocompleteSelectedEvent) {
    this.components.update((c) => this.previewPanelService.sortComponentsOnSelect(c, opt.option.value));
  }
}
