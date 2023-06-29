import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentPanelComponent } from './contract-payment-panel.component';

describe('ContractPaymentPanelComponent', () => {
  let component: ContractPaymentPanelComponent;
  let fixture: ComponentFixture<ContractPaymentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
