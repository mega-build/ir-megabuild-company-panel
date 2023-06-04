import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContractPaymentMethodComponent } from './select-contract-payment-method.component';

describe('SelectContractPaymentMethodComponent', () => {
  let component: SelectContractPaymentMethodComponent;
  let fixture: ComponentFixture<SelectContractPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectContractPaymentMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectContractPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
