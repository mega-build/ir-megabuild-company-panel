import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserAccessComponent } from './set-user-access.component';

describe('SetUserAccessComponent', () => {
  let component: SetUserAccessComponent;
  let fixture: ComponentFixture<SetUserAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUserAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
