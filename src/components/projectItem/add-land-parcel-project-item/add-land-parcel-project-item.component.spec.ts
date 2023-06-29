import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandParcelProjectItemComponent } from './add-land-parcel-project-item.component';

describe('AddLandParcelProjectItemComponent', () => {
  let component: AddLandParcelProjectItemComponent;
  let fixture: ComponentFixture<AddLandParcelProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLandParcelProjectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLandParcelProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
