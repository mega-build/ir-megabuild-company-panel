import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractCustomerComponent } from './edit-contract-customer.component';

describe('EditContractCustomerComponent', () => {
  let component: EditContractCustomerComponent;
  let fixture: ComponentFixture<EditContractCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContractCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContractCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
