import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLabelComponent } from './project-label.component';

describe('ProjectLabelComponent', () => {
  let component: ProjectLabelComponent;
  let fixture: ComponentFixture<ProjectLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
