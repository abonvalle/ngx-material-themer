import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePaletteModeComponent } from './theme-palette-mode.component';

describe('ThemePaletteModeComponent', () => {
  let component: ThemePaletteModeComponent;
  let fixture: ComponentFixture<ThemePaletteModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePaletteModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemePaletteModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
