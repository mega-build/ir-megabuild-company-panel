import { TestBed } from '@angular/core/testing';

import { ContractPaymentMethodService } from './contract-payment-method.service';

describe('ContractPaymentMethodService', () => {
  let service: ContractPaymentMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractPaymentMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
