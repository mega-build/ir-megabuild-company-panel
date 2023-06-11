import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractListItemComponent } from './contract-list-item.component';

describe('ContractListItemComponent', () => {
  let component: ContractListItemComponent;
  let fixture: ComponentFixture<ContractListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
