import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBrickComponent } from './color-brick.component';

describe('ColorBrickComponent', () => {
  let component: ColorBrickComponent;
  let fixture: ComponentFixture<ColorBrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBrickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorBrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
