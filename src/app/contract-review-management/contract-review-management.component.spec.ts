import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReviewManagementComponent } from './contract-review-management.component';

describe('ContractReviewManagementComponent', () => {
  let component: ContractReviewManagementComponent;
  let fixture: ComponentFixture<ContractReviewManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractReviewManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractReviewManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
