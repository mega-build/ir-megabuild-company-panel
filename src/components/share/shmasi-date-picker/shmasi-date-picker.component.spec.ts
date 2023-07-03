import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShmasiDatePickerComponent } from './shmasi-date-picker.component';

describe('ShmasiDatePickerComponent', () => {
  let component: ShmasiDatePickerComponent;
  let fixture: ComponentFixture<ShmasiDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShmasiDatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShmasiDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
