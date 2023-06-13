import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestContractReviewComponent } from './request-contract-review.component';

describe('RequestContractReviewComponent', () => {
  let component: RequestContractReviewComponent;
  let fixture: ComponentFixture<RequestContractReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestContractReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestContractReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
