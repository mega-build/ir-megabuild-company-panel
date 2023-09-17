import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentDeedDetailComponent } from './contract-payment-deed-detail.component';

describe('ContractPaymentDeedDetailComponent', () => {
  let component: ContractPaymentDeedDetailComponent;
  let fixture: ComponentFixture<ContractPaymentDeedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentDeedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentDeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
