import { TestBed } from '@angular/core/testing';

import { ContractReviewService } from './contract-review.service';

describe('ContractReviewService', () => {
  let service: ContractReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
