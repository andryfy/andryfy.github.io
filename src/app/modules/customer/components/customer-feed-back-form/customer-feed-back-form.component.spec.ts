import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeedBackFormComponent } from './customer-feed-back-form.component';

describe('CustomerFeedBackFormComponent', () => {
  let component: CustomerFeedBackFormComponent;
  let fixture: ComponentFixture<CustomerFeedBackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFeedBackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFeedBackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
