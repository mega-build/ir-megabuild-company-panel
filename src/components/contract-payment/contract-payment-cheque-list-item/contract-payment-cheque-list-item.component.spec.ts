import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentChequeListItemComponent } from './contract-payment-cheque-list-item.component';

describe('ContractPaymentChequeListItemComponent', () => {
  let component: ContractPaymentChequeListItemComponent;
  let fixture: ComponentFixture<ContractPaymentChequeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentChequeListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentChequeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
