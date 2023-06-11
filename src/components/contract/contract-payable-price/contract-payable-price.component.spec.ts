import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPayablePriceComponent } from './contract-payable-price.component';

describe('ContractPayablePriceComponent', () => {
  let component: ContractPayablePriceComponent;
  let fixture: ComponentFixture<ContractPayablePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPayablePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPayablePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
