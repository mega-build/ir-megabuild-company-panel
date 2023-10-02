import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContractReviewerUserCompanyAccessListComponent } from './select-contract-reviewer-user-company-access-list.component';

describe('SelectContractReviewerUserCompanyAccessListComponent', () => {
  let component: SelectContractReviewerUserCompanyAccessListComponent;
  let fixture: ComponentFixture<SelectContractReviewerUserCompanyAccessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectContractReviewerUserCompanyAccessListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectContractReviewerUserCompanyAccessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
