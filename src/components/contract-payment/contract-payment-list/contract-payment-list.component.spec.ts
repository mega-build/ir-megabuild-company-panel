import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentListComponent } from './contract-payment-list.component';

describe('ContractPaymentListComponent', () => {
  let component: ContractPaymentListComponent;
  let fixture: ComponentFixture<ContractPaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
