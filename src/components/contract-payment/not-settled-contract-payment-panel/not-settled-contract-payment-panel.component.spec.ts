import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSettledContractPaymentPanelComponent } from './not-settled-contract-payment-panel.component';

describe('NotSettledContractPaymentPanelComponent', () => {
  let component: NotSettledContractPaymentPanelComponent;
  let fixture: ComponentFixture<NotSettledContractPaymentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSettledContractPaymentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSettledContractPaymentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
