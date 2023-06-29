import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserCompanyAccessComponent } from './select-user-company-access.component';

describe('SelectUserCompanyAccessComponent', () => {
  let component: SelectUserCompanyAccessComponent;
  let fixture: ComponentFixture<SelectUserCompanyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUserCompanyAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUserCompanyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
