import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTemplateListComponent } from './contract-template-list.component';

describe('ContractTemplateListComponent', () => {
  let component: ContractTemplateListComponent;
  let fixture: ComponentFixture<ContractTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractTemplateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
