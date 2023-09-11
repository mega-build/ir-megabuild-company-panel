import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentByContractDepositListItemComponent } from './contract-payment-by-contract-deposit-list-item.component';

describe('ContractPaymentByContractDepositListItemComponent', () => {
  let component: ContractPaymentByContractDepositListItemComponent;
  let fixture: ComponentFixture<ContractPaymentByContractDepositListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentByContractDepositListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentByContractDepositListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
