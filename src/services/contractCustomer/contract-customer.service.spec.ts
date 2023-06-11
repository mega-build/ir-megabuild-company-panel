import { TestBed } from '@angular/core/testing';

import { ContractCustomerService } from './contract-customer.service';

describe('ContractCustomerService', () => {
  let service: ContractCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
