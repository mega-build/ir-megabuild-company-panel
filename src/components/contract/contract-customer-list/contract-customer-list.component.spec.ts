import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCustomerListComponent } from './contract-customer-list.component';

describe('ContractCustomerListComponent', () => {
  let component: ContractCustomerListComponent;
  let fixture: ComponentFixture<ContractCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractCustomerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
