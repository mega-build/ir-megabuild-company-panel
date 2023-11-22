import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractTemplateComponent } from './edit-contract-template.component';

describe('EditContractTemplateComponent', () => {
  let component: EditContractTemplateComponent;
  let fixture: ComponentFixture<EditContractTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContractTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
