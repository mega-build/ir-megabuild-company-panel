import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLabelComponent } from './bank-label.component';

describe('BankLabelComponent', () => {
  let component: BankLabelComponent;
  let fixture: ComponentFixture<BankLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
