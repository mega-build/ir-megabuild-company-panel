import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithEmailPasswordComponent } from './login-with-email-password.component';

describe('LoginWithEmailPasswordComponent', () => {
  let component: LoginWithEmailPasswordComponent;
  let fixture: ComponentFixture<LoginWithEmailPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithEmailPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithEmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
