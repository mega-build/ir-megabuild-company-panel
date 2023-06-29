import { TestBed } from '@angular/core/testing';

import { UserCompanyAccessService } from './user-company-access.service';

describe('UserCompanyAccessService', () => {
  let service: UserCompanyAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCompanyAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
