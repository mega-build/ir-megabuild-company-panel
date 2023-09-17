import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentDickerDetailComponent } from './contract-payment-dicker-detail.component';

describe('ContractPaymentDickerDetailComponent', () => {
  let component: ContractPaymentDickerDetailComponent;
  let fixture: ComponentFixture<ContractPaymentDickerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentDickerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentDickerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
