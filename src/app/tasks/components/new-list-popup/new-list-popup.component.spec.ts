import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListPopupComponent } from './new-list-popup.component';

describe('NewListPopupComponent', () => {
  let component: NewListPopupComponent;
  let fixture: ComponentFixture<NewListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
