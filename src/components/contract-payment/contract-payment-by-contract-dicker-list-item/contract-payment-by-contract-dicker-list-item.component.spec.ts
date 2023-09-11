import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentByContractDickerListItemComponent } from './contract-payment-by-contract-dicker-list-item.component';

describe('ContractPaymentByContractDickerListItemComponent', () => {
  let component: ContractPaymentByContractDickerListItemComponent;
  let fixture: ComponentFixture<ContractPaymentByContractDickerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentByContractDickerListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentByContractDickerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
