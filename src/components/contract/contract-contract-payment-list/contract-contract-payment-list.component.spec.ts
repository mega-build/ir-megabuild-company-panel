import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractContractPaymentListComponent } from './contract-contract-payment-list.component';

describe('ContractContractPaymentListComponent', () => {
  let component: ContractContractPaymentListComponent;
  let fixture: ComponentFixture<ContractContractPaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractContractPaymentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractContractPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
