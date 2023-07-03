import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractPaymentDeedComponent } from './add-contract-payment-deed.component';

describe('AddContractPaymentDeedComponent', () => {
  let component: AddContractPaymentDeedComponent;
  let fixture: ComponentFixture<AddContractPaymentDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractPaymentDeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractPaymentDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
