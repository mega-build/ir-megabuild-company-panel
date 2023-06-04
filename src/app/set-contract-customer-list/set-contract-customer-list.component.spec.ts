import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetContractCustomerListComponent } from './set-contract-customer-list.component';

describe('SetContractCustomerListComponent', () => {
  let component: SetContractCustomerListComponent;
  let fixture: ComponentFixture<SetContractCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetContractCustomerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetContractCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
