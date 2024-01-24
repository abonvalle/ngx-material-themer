import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme-mode.service';

describe('ThemeModeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
