import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentByContractChequeListItemComponent } from './contract-payment-by-contract-cheque-list-item.component';

describe('ContractPaymentByContractChequeListItemComponent', () => {
  let component: ContractPaymentByContractChequeListItemComponent;
  let fixture: ComponentFixture<ContractPaymentByContractChequeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentByContractChequeListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentByContractChequeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
