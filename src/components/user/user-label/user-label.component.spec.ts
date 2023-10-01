import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLabelComponent } from './user-label.component';

describe('UserLabelComponent', () => {
  let component: UserLabelComponent;
  let fixture: ComponentFixture<UserLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
