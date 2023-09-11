import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentDickerListItemComponent } from './contract-payment-dicker-list-item.component';

describe('ContractPaymentDickerListItemComponent', () => {
  let component: ContractPaymentDickerListItemComponent;
  let fixture: ComponentFixture<ContractPaymentDickerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentDickerListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentDickerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
