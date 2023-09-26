import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCustomerPanelComponent } from './contract-customer-panel.component';

describe('ContractCustomerPanelComponent', () => {
  let component: ContractCustomerPanelComponent;
  let fixture: ComponentFixture<ContractCustomerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractCustomerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractCustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
