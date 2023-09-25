import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalCodeInputComponent } from './national-code-input.component';

describe('NationalCodeInputComponent', () => {
  let component: NationalCodeInputComponent;
  let fixture: ComponentFixture<NationalCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalCodeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
