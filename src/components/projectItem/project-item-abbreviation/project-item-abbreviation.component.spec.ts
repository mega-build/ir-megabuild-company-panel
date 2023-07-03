import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemAbbreviationComponent } from './project-item-abbreviation.component';

describe('ProjectItemAbbreviationComponent', () => {
  let component: ProjectItemAbbreviationComponent;
  let fixture: ComponentFixture<ProjectItemAbbreviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemAbbreviationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemAbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
