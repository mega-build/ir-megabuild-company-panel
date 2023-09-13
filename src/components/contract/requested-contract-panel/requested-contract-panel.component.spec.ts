import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedContractPanelComponent } from './requested-contract-panel.component';

describe('RequestedContractPanelComponent', () => {
  let component: RequestedContractPanelComponent;
  let fixture: ComponentFixture<RequestedContractPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedContractPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedContractPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
