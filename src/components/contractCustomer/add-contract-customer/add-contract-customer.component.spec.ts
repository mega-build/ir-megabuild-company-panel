import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractCustomerComponent } from './add-contract-customer.component';

describe('AddContractCustomerComponent', () => {
  let component: AddContractCustomerComponent;
  let fixture: ComponentFixture<AddContractCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
