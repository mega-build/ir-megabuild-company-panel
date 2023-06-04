import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetContractProjectItemComponent } from './set-contract-project-item.component';

describe('SetContractProjectItemComponent', () => {
  let component: SetContractProjectItemComponent;
  let fixture: ComponentFixture<SetContractProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetContractProjectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetContractProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
