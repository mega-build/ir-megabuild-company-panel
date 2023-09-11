import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPaymentDeedListItemComponent } from './contract-payment-deed-list-item.component';

describe('ContractPaymentDeedListItemComponent', () => {
  let component: ContractPaymentDeedListItemComponent;
  let fixture: ComponentFixture<ContractPaymentDeedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPaymentDeedListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPaymentDeedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
