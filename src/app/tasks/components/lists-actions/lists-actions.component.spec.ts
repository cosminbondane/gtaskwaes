import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsActionsComponent } from './lists-actions.component';

describe('ListsActionsComponent', () => {
  let component: ListsActionsComponent;
  let fixture: ComponentFixture<ListsActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
