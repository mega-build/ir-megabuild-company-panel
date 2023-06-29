import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentManagementComponent } from './contract-payment-management.component';

describe('ContractPaymentManagementComponent', () => {
  let component: ContractPaymentManagementComponent;
  let fixture: ComponentFixture<ContractPaymentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
