import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListLabelComponent } from './customer-list-label.component';

describe('CustomerListLabelComponent', () => {
  let component: CustomerListLabelComponent;
  let fixture: ComponentFixture<CustomerListLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
