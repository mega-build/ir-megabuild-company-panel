import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractProjectItemComponent } from './contract-project-item.component';

describe('ContractProjectItemComponent', () => {
  let component: ContractProjectItemComponent;
  let fixture: ComponentFixture<ContractProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractProjectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
