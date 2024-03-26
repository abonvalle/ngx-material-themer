import { CommonModule } from '@angular/common';
import { Component, DestroyRef, ElementRef, OnInit, WritableSignal, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ThemesService } from '@app/shared/services/themes.service';
import { map, startWith } from 'rxjs';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { PreviewComponent as PreviewComponentInterface } from './model/preview-component.interface';
import { PreviewService } from './preview.service';
@Component({
  selector: 'app-preview',
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
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent implements OnInit {
  components: WritableSignal<PreviewComponentInterface[]> = signal(this.previewService.components);
  myControl = new FormControl('');
  filteredOptions: WritableSignal<string[]> = signal([]);
  destroyRef = inject(DestroyRef);
  constructor(
    public previewService: PreviewService,
    private elementRef: ElementRef,
    private themesService: ThemesService
  ) {
    effect(() => {
      this.themesService.themes();
      console.log('update detected');
      this.elementRef && this.themesService.applyThemes(this.elementRef);
    });
  }
  ngOnInit() {
    this.myControl.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        startWith(''),
        map((value) => this.previewService.filterOpts(value || ''))
      )
      .subscribe((value) => {
        this.filteredOptions.set(value);
      });
  }
  onInput(evt: Event) {
    const value = (<HTMLInputElement>evt.target).value;
    this.components.update((c) => this.previewService.sortComponentsOnInput(c, value));
  }

  onOptSelected(opt: MatAutocompleteSelectedEvent) {
    this.components.update((c) => this.previewService.sortComponentsOnSelect(c, opt.option.value));
  }
}
