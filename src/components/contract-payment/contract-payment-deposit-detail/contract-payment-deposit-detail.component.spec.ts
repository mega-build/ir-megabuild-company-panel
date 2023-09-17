import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentDepositDetailComponent } from './contract-payment-deposit-detail.component';

describe('ContractPaymentDepositDetailComponent', () => {
  let component: ContractPaymentDepositDetailComponent;
  let fixture: ComponentFixture<ContractPaymentDepositDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentDepositDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentDepositDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
