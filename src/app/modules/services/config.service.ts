import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  hideHelpTooltips = signal(false);
  constructor() {}
  toggleHideHelpTooltips() {
    this.hideHelpTooltips.update((h) => !h);
  }
}
