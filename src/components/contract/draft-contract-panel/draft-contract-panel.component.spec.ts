import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftContractPanelComponent } from './draft-contract-panel.component';

describe('DraftContractPanelComponent', () => {
  let component: DraftContractPanelComponent;
  let fixture: ComponentFixture<DraftContractPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftContractPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftContractPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
