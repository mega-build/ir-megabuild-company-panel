import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftContractComponent } from './draft-contract.component';

describe('DraftContractComponent', () => {
  let component: DraftContractComponent;
  let fixture: ComponentFixture<DraftContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
