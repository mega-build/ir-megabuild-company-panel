import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserUserCompanyAccessComponent } from './add-user-user-company-access.component';

describe('AddUserUserCompanyAccessComponent', () => {
  let component: AddUserUserCompanyAccessComponent;
  let fixture: ComponentFixture<AddUserUserCompanyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserUserCompanyAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserUserCompanyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
