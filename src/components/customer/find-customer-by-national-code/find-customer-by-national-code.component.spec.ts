import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCustomerByNationalCodeComponent } from './find-customer-by-national-code.component';

describe('FindCustomerByNationalCodeComponent', () => {
  let component: FindCustomerByNationalCodeComponent;
  let fixture: ComponentFixture<FindCustomerByNationalCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCustomerByNationalCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindCustomerByNationalCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
