import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLabelComponent } from './price-label.component';

describe('PriceLabelComponent', () => {
  let component: PriceLabelComponent;
  let fixture: ComponentFixture<PriceLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
