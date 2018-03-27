import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsComponent } from './list-items.component';
import { TasksMaterialModule } from '../../tasks.material.module';

describe('ListItemsComponent', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsComponent ],
      imports: [TasksMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit itemStatusChanged if item was checked/unchecked', () => {
    component.itemStatusChanged.subscribe(({id, status}) => {
      expect(id).toEqual('132F');
      expect(status).toEqual('completed');
    });

    component.checkItem('132F', true);
  });

  it('should emit itemRemoved if item was removed', () => {
    component.itemRemoved.subscribe(id => {
      expect(id).toEqual('132F');
    });

    component.removeItem('132F');
  });
});
