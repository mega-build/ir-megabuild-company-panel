import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentFilterComponent } from './contract-payment-filter.component';

describe('ContractPaymentFilterComponent', () => {
  let component: ContractPaymentFilterComponent;
  let fixture: ComponentFixture<ContractPaymentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
