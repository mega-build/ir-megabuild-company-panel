import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentDepositListItemComponent } from './contract-payment-deposit-list-item.component';

describe('ContractPaymentDepositListItemComponent', () => {
  let component: ContractPaymentDepositListItemComponent;
  let fixture: ComponentFixture<ContractPaymentDepositListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentDepositListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentDepositListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
