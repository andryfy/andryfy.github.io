import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RallongeItemComponent } from './rallonge-item.component';

describe('RallongeItemComponent', () => {
  let component: RallongeItemComponent;
  let fixture: ComponentFixture<RallongeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RallongeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RallongeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
