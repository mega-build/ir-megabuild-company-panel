import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLabelComponent } from './company-label.component';

describe('CompanyLabelComponent', () => {
  let component: CompanyLabelComponent;
  let fixture: ComponentFixture<CompanyLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
