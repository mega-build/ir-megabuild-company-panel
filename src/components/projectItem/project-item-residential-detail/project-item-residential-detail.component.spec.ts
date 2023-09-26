import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemResidentialDetailComponent } from './project-item-residential-detail.component';

describe('ProjectItemResidentialDetailComponent', () => {
  let component: ProjectItemResidentialDetailComponent;
  let fixture: ComponentFixture<ProjectItemResidentialDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemResidentialDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemResidentialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
