import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPayablePriceDetailComponent } from './contract-payable-price-detail.component';

describe('ContractPayablePriceDetailComponent', () => {
  let component: ContractPayablePriceDetailComponent;
  let fixture: ComponentFixture<ContractPayablePriceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPayablePriceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPayablePriceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
