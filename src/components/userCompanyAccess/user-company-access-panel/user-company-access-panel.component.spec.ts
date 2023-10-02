import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyAccessPanelComponent } from './user-company-access-panel.component';

describe('UserCompanyAccessPanelComponent', () => {
  let component: UserCompanyAccessPanelComponent;
  let fixture: ComponentFixture<UserCompanyAccessPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompanyAccessPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCompanyAccessPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
