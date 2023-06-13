import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReviewPanelComponent } from './contract-review-panel.component';

describe('ContractReviewPanelComponent', () => {
  let component: ContractReviewPanelComponent;
  let fixture: ComponentFixture<ContractReviewPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractReviewPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractReviewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
