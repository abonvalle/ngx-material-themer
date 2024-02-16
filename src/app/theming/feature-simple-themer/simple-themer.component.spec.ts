import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleThemerComponent } from './simple-themer.component';

describe('SimpleThemerComponent', () => {
  let component: SimpleThemerComponent;
  let fixture: ComponentFixture<SimpleThemerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleThemerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleThemerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
