import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetContractPaymentLisComponent } from './set-contract-payment-lis.component';

describe('SetContractPaymentLisComponent', () => {
  let component: SetContractPaymentLisComponent;
  let fixture: ComponentFixture<SetContractPaymentLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetContractPaymentLisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetContractPaymentLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
