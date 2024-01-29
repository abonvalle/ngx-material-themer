import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeClassicModeComponent } from './theme-classic-mode.component';

describe('ThemeClassicModeComponent', () => {
  let component: ThemeClassicModeComponent;
  let fixture: ComponentFixture<ThemeClassicModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeClassicModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeClassicModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
