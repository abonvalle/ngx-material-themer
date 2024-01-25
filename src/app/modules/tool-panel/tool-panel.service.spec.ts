import { TestBed } from '@angular/core/testing';

import { ToolPanelService } from './tool-panel.service';

describe('ToolPanelService', () => {
  let service: ToolPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
