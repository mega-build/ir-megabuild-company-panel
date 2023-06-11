import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractPaymentChequeComponent } from './add-contract-payment-cheque.component';

describe('AddContractPaymentChequeComponent', () => {
  let component: AddContractPaymentChequeComponent;
  let fixture: ComponentFixture<AddContractPaymentChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractPaymentChequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractPaymentChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
