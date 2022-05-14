import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCircuitComponent } from './admin-circuit.component';

describe('AdminCircuitComponent', () => {
  let component: AdminCircuitComponent;
  let fixture: ComponentFixture<AdminCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCircuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
