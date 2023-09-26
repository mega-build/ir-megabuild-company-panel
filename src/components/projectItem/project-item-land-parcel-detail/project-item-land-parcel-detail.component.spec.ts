import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemLandParcelDetailComponent } from './project-item-land-parcel-detail.component';

describe('ProjectItemLandParcelDetailComponent', () => {
  let component: ProjectItemLandParcelDetailComponent;
  let fixture: ComponentFixture<ProjectItemLandParcelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemLandParcelDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemLandParcelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
