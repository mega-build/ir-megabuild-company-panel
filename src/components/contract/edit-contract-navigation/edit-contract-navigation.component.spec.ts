import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractNavigationComponent } from './edit-contract-navigation.component';

describe('EditContractNavigationComponent', () => {
  let component: EditContractNavigationComponent;
  let fixture: ComponentFixture<EditContractNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContractNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContractNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
