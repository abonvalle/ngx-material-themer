import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePalettesModeComponent } from './theme-palettes-mode.component';

describe('ThemePalettesModeComponent', () => {
  let component: ThemePalettesModeComponent;
  let fixture: ComponentFixture<ThemePalettesModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePalettesModeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemePalettesModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
