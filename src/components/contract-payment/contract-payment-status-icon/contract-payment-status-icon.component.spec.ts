import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentStatusIconComponent } from './contract-payment-status-icon.component';

describe('ContractPaymentStatusIconComponent', () => {
  let component: ContractPaymentStatusIconComponent;
  let fixture: ComponentFixture<ContractPaymentStatusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentStatusIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentStatusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
