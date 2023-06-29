import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContractTemplateComponent } from './select-contract-template.component';

describe('SelectContractTemplateComponent', () => {
  let component: SelectContractTemplateComponent;
  let fixture: ComponentFixture<SelectContractTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectContractTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectContractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
