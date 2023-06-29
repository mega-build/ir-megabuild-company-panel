import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTemplateEditorComponent } from './contract-template-editor.component';

describe('ContractTemplateEditorComponent', () => {
  let component: ContractTemplateEditorComponent;
  let fixture: ComponentFixture<ContractTemplateEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractTemplateEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTemplateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
