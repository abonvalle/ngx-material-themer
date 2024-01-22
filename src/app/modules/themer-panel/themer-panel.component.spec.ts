import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemerPanelComponent } from './themer-panel.component';

describe('ThemerPanelComponent', () => {
  let component: ThemerPanelComponent;
  let fixture: ComponentFixture<ThemerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemerPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
