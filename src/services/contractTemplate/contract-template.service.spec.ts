import { TestBed } from '@angular/core/testing';

import { ContractTemplateService } from './contract-template.service';

describe('ContractTemplateService', () => {
  let service: ContractTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
