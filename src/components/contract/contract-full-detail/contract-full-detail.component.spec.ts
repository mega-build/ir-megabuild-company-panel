import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFullDetailComponent } from './contract-full-detail.component';

describe('ContractFullDetailComponent', () => {
  let component: ContractFullDetailComponent;
  let fixture: ComponentFixture<ContractFullDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractFullDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractFullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
