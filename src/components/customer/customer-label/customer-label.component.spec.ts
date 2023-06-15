import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLabelComponent } from './customer-label.component';

describe('CustomerLabelComponent', () => {
  let component: CustomerLabelComponent;
  let fixture: ComponentFixture<CustomerLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
