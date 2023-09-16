import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpetRequestedContractComponent } from './accpet-requested-contract.component';

describe('AccpetRequestedContractComponent', () => {
  let component: AccpetRequestedContractComponent;
  let fixture: ComponentFixture<AccpetRequestedContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccpetRequestedContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccpetRequestedContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
