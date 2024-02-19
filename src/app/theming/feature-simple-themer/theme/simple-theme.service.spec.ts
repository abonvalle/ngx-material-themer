import { TestBed } from '@angular/core/testing';

import { SimpleThemeService } from './simple-theme.service';

describe('SimpleThemeService', () => {
  let service: SimpleThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
