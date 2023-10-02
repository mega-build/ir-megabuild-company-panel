import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserCompanyAccessPermissionComponent } from './set-user-company-access-permission.component';

describe('SetUserCompanyAccessPermissionComponent', () => {
  let component: SetUserCompanyAccessPermissionComponent;
  let fixture: ComponentFixture<SetUserCompanyAccessPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUserCompanyAccessPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUserCompanyAccessPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
