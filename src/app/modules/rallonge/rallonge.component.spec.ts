import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RallongeComponent } from './rallonge.component';

describe('RallongeComponent', () => {
  let component: RallongeComponent;
  let fixture: ComponentFixture<RallongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RallongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RallongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
