import { TestBed } from '@angular/core/testing';

import { ProjectTypeService } from './project-type.service';

describe('ProjectTypeService', () => {
  let service: ProjectTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
