import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractPaymentDepositComponent } from './add-contract-payment-deposit.component';

describe('AddContractPaymentDepositComponent', () => {
  let component: AddContractPaymentDepositComponent;
  let fixture: ComponentFixture<AddContractPaymentDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractPaymentDepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractPaymentDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
