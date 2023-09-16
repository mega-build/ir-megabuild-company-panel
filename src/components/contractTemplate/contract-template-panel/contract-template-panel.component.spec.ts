import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTemplatePanelComponent } from './contract-template-panel.component';

describe('ContractTemplatePanelComponent', () => {
  let component: ContractTemplatePanelComponent;
  let fixture: ComponentFixture<ContractTemplatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractTemplatePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTemplatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
