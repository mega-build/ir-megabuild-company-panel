import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewContractReviewComponent } from './review-contract-review.component';

describe('ReviewContractReviewComponent', () => {
  let component: ReviewContractReviewComponent;
  let fixture: ComponentFixture<ReviewContractReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewContractReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewContractReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
