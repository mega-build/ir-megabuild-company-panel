import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContractTypeComponent } from './select-contract-type.component';

describe('SelectContractTypeComponent', () => {
  let component: SelectContractTypeComponent;
  let fixture: ComponentFixture<SelectContractTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectContractTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectContractTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
