import { TestBed } from '@angular/core/testing';

import { ContractTypeService } from './contract-type.service';

describe('ContractTypeService', () => {
  let service: ContractTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
