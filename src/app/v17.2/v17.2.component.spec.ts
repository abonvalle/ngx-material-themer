import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V172Component } from './v17.2.component';

describe('V172Component', () => {
  let component: V172Component;
  let fixture: ComponentFixture<V172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V172Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(V172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
