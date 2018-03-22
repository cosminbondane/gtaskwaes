import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsSectionComponent } from './list-items-section.component';

describe('ListItemsSectionComponent', () => {
  let component: ListItemsSectionComponent;
  let fixture: ComponentFixture<ListItemsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
