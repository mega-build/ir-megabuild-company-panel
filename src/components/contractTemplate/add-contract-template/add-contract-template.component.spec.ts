import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractTemplateComponent } from './add-contract-template.component';

describe('AddContractTemplateComponent', () => {
  let component: AddContractTemplateComponent;
  let fixture: ComponentFixture<AddContractTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
