import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentByContractDeedListItemComponent } from './contract-payment-by-contract-deed-list-item.component';

describe('ContractPaymentByContractDeedListItemComponent', () => {
  let component: ContractPaymentByContractDeedListItemComponent;
  let fixture: ComponentFixture<ContractPaymentByContractDeedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentByContractDeedListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentByContractDeedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
