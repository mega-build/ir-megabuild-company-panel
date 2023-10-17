import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractPayablePriceComponent } from './add-contract-payable-price.component';

describe('AddContractPayablePriceComponent', () => {
  let component: AddContractPayablePriceComponent;
  let fixture: ComponentFixture<AddContractPayablePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractPayablePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractPayablePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
