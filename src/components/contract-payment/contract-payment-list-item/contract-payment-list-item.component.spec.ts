import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentListItemComponent } from './contract-payment-list-item.component';

describe('ContractPaymentListItemComponent', () => {
  let component: ContractPaymentListItemComponent;
  let fixture: ComponentFixture<ContractPaymentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
