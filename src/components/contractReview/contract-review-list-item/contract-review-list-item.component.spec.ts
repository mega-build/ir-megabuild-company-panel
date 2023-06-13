import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReviewListItemComponent } from './contract-review-list-item.component';

describe('ContractReviewListItemComponent', () => {
  let component: ContractReviewListItemComponent;
  let fixture: ComponentFixture<ContractReviewListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractReviewListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractReviewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
