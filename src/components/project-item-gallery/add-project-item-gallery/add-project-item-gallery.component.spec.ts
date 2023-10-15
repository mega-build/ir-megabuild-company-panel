import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectItemGalleryComponent } from './add-project-item-gallery.component';

describe('AddProjectItemGalleryComponent', () => {
  let component: AddProjectItemGalleryComponent;
  let fixture: ComponentFixture<AddProjectItemGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectItemGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectItemGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
