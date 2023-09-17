import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewContractPaymentComponent } from './review-contract-payment.component';

describe('ReviewContractPaymentComponent', () => {
  let component: ReviewContractPaymentComponent;
  let fixture: ComponentFixture<ReviewContractPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewContractPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewContractPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
