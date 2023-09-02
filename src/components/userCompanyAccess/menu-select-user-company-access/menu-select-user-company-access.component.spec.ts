import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSelectUserCompanyAccessComponent } from './menu-select-user-company-access.component';

describe('MenuSelectUserCompanyAccessComponent', () => {
  let component: MenuSelectUserCompanyAccessComponent;
  let fixture: ComponentFixture<MenuSelectUserCompanyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSelectUserCompanyAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSelectUserCompanyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
