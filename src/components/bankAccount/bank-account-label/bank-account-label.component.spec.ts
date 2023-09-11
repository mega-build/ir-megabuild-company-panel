import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountLabelComponent } from './bank-account-label.component';

describe('BankAccountLabelComponent', () => {
  let component: BankAccountLabelComponent;
  let fixture: ComponentFixture<BankAccountLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccountLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
