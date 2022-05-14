import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeedBackComponent } from './customer-feed-back.component';

describe('CustomerFeedBackComponent', () => {
  let component: CustomerFeedBackComponent;
  let fixture: ComponentFixture<CustomerFeedBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFeedBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
