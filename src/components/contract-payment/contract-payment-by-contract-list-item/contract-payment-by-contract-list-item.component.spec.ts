import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentByContractListItemComponent } from './contract-payment-by-contract-list-item.component';

describe('ContractPaymentByContractListItemComponent', () => {
  let component: ContractPaymentByContractListItemComponent;
  let fixture: ComponentFixture<ContractPaymentByContractListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentByContractListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentByContractListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
