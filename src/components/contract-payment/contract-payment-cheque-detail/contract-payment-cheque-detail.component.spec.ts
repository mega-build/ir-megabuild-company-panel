import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentChequeDetailComponent } from './contract-payment-cheque-detail.component';

describe('ContractPaymentChequeDetailComponent', () => {
  let component: ContractPaymentChequeDetailComponent;
  let fixture: ComponentFixture<ContractPaymentChequeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentChequeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentChequeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
