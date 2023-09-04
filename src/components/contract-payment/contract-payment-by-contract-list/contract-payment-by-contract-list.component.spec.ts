import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentByContractListComponent } from './contract-payment-by-contract-list.component';

describe('ContractPaymentByContractListComponent', () => {
  let component: ContractPaymentByContractListComponent;
  let fixture: ComponentFixture<ContractPaymentByContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentByContractListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentByContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
