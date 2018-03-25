import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsSectionComponent } from './lists-section.component';
import { TasksMaterialModule } from '../../tasks.material.module';
import { StoreModule } from '@ngrx/store';
import { TasksActions } from '../../tasks.actions';
import { GoogleTasksService } from '../../services/google-tasks.service';
import * as fromTasks from '../../tasks.reducer';
import { ListsActionsComponent } from '../../components/lists-actions/lists-actions.component';
import { ListsComponent } from '../../components/lists/lists.component';

class MockTasksActions extends TasksActions {
  loadLists(): void { }
  addNewList(title: string): void { }
  selectList(id: string): void { }
  removeList(id: number): void { }
  addNewListItem(listId: string, title: string): void { }
  changeListItemStatus(id: string, listId: string, status: string): void { }
}

describe('ListsSectionComponent', () => {
  let component: ListsSectionComponent;
  let fixture: ComponentFixture<ListsSectionComponent>;
  let tasksActions: TasksActions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListsSectionComponent, ListsActionsComponent, ListsComponent],
      imports: [TasksMaterialModule,
        StoreModule.forRoot({
          tasks: fromTasks.reducer
        })
      ],
      providers: [{ provide: TasksActions, useClass: MockTasksActions }, GoogleTasksService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    tasksActions = TestBed.get(TasksActions);
    fixture = TestBed.createComponent(ListsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(tasksActions, 'loadLists');
    expect(component).toBeTruthy();
    expect(tasksActions.loadLists).toHaveBeenCalled;
  });
});
