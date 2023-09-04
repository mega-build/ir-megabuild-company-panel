import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentByContractPanelComponent } from './contract-payment-by-contract-panel.component';

describe('ContractPaymentByContractPanelComponent', () => {
  let component: ContractPaymentByContractPanelComponent;
  let fixture: ComponentFixture<ContractPaymentByContractPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentByContractPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentByContractPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
