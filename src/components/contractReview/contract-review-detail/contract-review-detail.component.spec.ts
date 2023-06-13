import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReviewDetailComponent } from './contract-review-detail.component';

describe('ContractReviewDetailComponent', () => {
  let component: ContractReviewDetailComponent;
  let fixture: ComponentFixture<ContractReviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractReviewDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
