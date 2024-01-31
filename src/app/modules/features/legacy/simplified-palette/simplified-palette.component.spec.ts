import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedPaletteComponent } from './simplified-palette.component';

describe('SimplifiedPaletteComponent', () => {
  let component: SimplifiedPaletteComponent;
  let fixture: ComponentFixture<SimplifiedPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplifiedPaletteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplifiedPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
