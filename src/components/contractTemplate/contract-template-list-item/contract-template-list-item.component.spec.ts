import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTemplateListItemComponent } from './contract-template-list-item.component';

describe('ContractTemplateListItemComponent', () => {
  let component: ContractTemplateListItemComponent;
  let fixture: ComponentFixture<ContractTemplateListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractTemplateListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTemplateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
