import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNavigationComponent } from './panel-navigation.component';

describe('PanelNavigationComponent', () => {
  let component: PanelNavigationComponent;
  let fixture: ComponentFixture<PanelNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
