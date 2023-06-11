import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractPaymentDickerComponent } from './add-contract-payment-dicker.component';

describe('AddContractPaymentDickerComponent', () => {
  let component: AddContractPaymentDickerComponent;
  let fixture: ComponentFixture<AddContractPaymentDickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractPaymentDickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractPaymentDickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
