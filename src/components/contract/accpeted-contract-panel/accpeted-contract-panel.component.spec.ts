import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpetedContractPanelComponent } from './accpeted-contract-panel.component';

describe('AccpetedContractPanelComponent', () => {
  let component: AccpetedContractPanelComponent;
  let fixture: ComponentFixture<AccpetedContractPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccpetedContractPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccpetedContractPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
