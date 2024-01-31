import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHueDialogComponent } from './default-hue-dialog.component';

describe('DefaultHueDialogComponent', () => {
  let component: DefaultHueDialogComponent;
  let fixture: ComponentFixture<DefaultHueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultHueDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultHueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
