import { TestBed } from '@angular/core/testing';

import { ProjectItemGalleryService } from './project-item-gallery.service';

describe('ProjectItemGalleryService', () => {
  let service: ProjectItemGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectItemGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
