import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitItemComponent } from './circuit-item.component';

describe('CircuitItemComponent', () => {
  let component: CircuitItemComponent;
  let fixture: ComponentFixture<CircuitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
