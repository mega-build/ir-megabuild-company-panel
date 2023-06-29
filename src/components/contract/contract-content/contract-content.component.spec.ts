import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractContentComponent } from './contract-content.component';

describe('ContractContentComponent', () => {
  let component: ContractContentComponent;
  let fixture: ComponentFixture<ContractContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
