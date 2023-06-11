import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPanelComponent } from './contract-panel.component';

describe('ContractPanelComponent', () => {
  let component: ContractPanelComponent;
  let fixture: ComponentFixture<ContractPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
