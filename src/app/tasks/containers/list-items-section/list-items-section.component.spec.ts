import * as fromTasks from '../../tasks.reducer';
import { ListItemsSectionComponent } from './list-items-section.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ListItemActionsComponent } from '../../components/list-item-actions/list-item-actions.component';
import { ListItemsComponent } from '../../components/list-items/list-items.component';
import { TasksMaterialModule } from '../../tasks.material.module';
import { StoreModule, Store } from '@ngrx/store';
import { TasksActionsService } from '../../tasks.actions';

describe('ListsSectionComponent', () => {
  let component: ListItemsSectionComponent;
  let fixture: ComponentFixture<ListItemsSectionComponent>;

  let storeSpy;
  let tasksActionsServiceSpy;

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('Store', [
      'pipe'
    ]);

    tasksActionsServiceSpy = jasmine.createSpyObj('TasksActionsService', [
      'addNewListItem', 'changeListItemStatus', 'removeListItem'
    ]);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemsSectionComponent,
        ListItemActionsComponent,
        ListItemsComponent
      ],
      imports: [TasksMaterialModule,
        StoreModule.forRoot({
          tasks: fromTasks.reducer
        })
      ],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: TasksActionsService, useValue: tasksActionsServiceSpy }
      ]
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

  it('should add new list item', () => {
    component.listId = '1R';
    component.onNewListItemAdded('mtask');
    expect(tasksActionsServiceSpy.addNewListItem).toHaveBeenCalledWith('1R', 'mtask');
  });

  it('should change item status', () => {
    component.listId = '2R';
    component.onItemStatusChanged({id: '2Ri', status: 'completed'});
    expect(tasksActionsServiceSpy.changeListItemStatus).toHaveBeenCalledWith('2Ri', '2R', 'completed');
  });

  it('should remove item', () => {
    component.listId = '3R';
    component.onItemRemoved('3Ri');
    expect(tasksActionsServiceSpy.removeListItem).toHaveBeenCalledWith('3Ri', '3R');
  });
});