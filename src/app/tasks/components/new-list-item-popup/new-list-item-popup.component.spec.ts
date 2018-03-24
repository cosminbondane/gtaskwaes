import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListItemPopupComponent } from './new-list-item-popup.component';

describe('NewListPopupComponent', () => {
  let component: NewListItemPopupComponent;
  let fixture: ComponentFixture<NewListItemPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListItemPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
