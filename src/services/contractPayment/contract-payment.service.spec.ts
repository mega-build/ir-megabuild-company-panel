import { TestBed } from '@angular/core/testing';

import { ContractPaymentService } from './contract-payment.service';

describe('ContractPaymentService', () => {
  let service: ContractPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
