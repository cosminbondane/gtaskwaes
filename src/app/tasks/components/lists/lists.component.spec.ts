import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsComponent } from './lists.component';
import { TasksMaterialModule } from '../../tasks.material.module';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsComponent ],
      imports: [TasksMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selectList if new list is selected', () => {
    component.listSelected.subscribe(id => {
      expect(id).toEqual('132F');
    });

    component.selectList('132F');
  });

  it('should emit selectList if new list is selected', () => {
    component.selectedItemId = '132F';
    component.listSelected.subscribe(id => {
      throw new Error();
    });

    component.selectList('132F');
  });
});
