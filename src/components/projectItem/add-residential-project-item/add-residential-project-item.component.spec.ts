import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidentialProjectItemComponent } from './add-residential-project-item.component';

describe('AddResidentialProjectItemComponent', () => {
  let component: AddResidentialProjectItemComponent;
  let fixture: ComponentFixture<AddResidentialProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResidentialProjectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResidentialProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
