import { TestBed } from '@angular/core/testing';

import { PreviewPanelService } from './preview-panel.service';

describe('PreviewPanelService', () => {
  let service: PreviewPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
