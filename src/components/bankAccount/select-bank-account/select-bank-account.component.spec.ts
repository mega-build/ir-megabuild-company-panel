import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBankAccountComponent } from './select-bank-account.component';

describe('SelectBankAccountComponent', () => {
  let component: SelectBankAccountComponent;
  let fixture: ComponentFixture<SelectBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBankAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
