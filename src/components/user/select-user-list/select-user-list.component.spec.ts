import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserListComponent } from './select-user-list.component';

describe('SelectUserListComponent', () => {
  let component: SelectUserListComponent;
  let fixture: ComponentFixture<SelectUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
