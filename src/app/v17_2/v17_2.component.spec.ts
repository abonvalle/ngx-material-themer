import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V17_2Component } from './v17_2.component';

describe('V17_2Component', () => {
  let component: V17_2Component;
  let fixture: ComponentFixture<V17_2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V17_2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(V17_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
