import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractBaseInfoComponent } from './edit-contract-base-info.component';

describe('EditContractBaseInfoComponent', () => {
  let component: EditContractBaseInfoComponent;
  let fixture: ComponentFixture<EditContractBaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContractBaseInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContractBaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
