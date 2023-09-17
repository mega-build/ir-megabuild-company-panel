import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentDetailComponent } from './contract-payment-detail.component';

describe('ContractPaymentDetailComponent', () => {
  let component: ContractPaymentDetailComponent;
  let fixture: ComponentFixture<ContractPaymentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
