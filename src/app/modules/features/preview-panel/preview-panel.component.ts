import { Component, DestroyRef, OnInit, Signal, WritableSignal, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { PreviewPanelService } from './preview-panel.service';
import { PreviewPanelComponent as PreviewPanelComponentInterface } from '@models/preview-panel-component.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
