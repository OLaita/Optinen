import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTComponent } from './color-t.component';

describe('ColorTComponent', () => {
  let component: ColorTComponent;
  let fixture: ComponentFixture<ColorTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
