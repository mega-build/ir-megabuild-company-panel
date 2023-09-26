import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStatusIconComponent } from './contract-status-icon.component';

describe('ContractStatusIconComponent', () => {
  let component: ContractStatusIconComponent;
  let fixture: ComponentFixture<ContractStatusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStatusIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractStatusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
