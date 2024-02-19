import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleThemeComponent } from './simple-theme.component';

describe('SimpleThemeComponent', () => {
  let component: SimpleThemeComponent;
  let fixture: ComponentFixture<SimpleThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleThemeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
