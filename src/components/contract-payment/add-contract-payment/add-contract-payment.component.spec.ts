import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractPaymentComponent } from './add-contract-payment.component';

describe('AddContractPaymentComponent', () => {
  let component: AddContractPaymentComponent;
  let fixture: ComponentFixture<AddContractPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
