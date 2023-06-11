import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemDetailComponent } from './project-item-detail.component';

describe('ProjectItemDetailComponent', () => {
  let component: ProjectItemDetailComponent;
  let fixture: ComponentFixture<ProjectItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
