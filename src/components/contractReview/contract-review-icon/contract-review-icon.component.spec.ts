import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReviewIconComponent } from './contract-review-icon.component';

describe('ContractReviewIconComponent', () => {
  let component: ContractReviewIconComponent;
  let fixture: ComponentFixture<ContractReviewIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractReviewIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractReviewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
