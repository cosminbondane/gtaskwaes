import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsSectionComponent } from './list-items-section.component';
import { MatDividerModule } from '@angular/material';
import { ListItemActionsComponent } from '../../components/list-item-actions/list-item-actions.component';
import { ListItemsComponent } from '../../components/list-items/list-items.component';
import { TasksMaterialModule } from '../../tasks.material.module';
import { StoreModule } from '@ngrx/store';

import * as fromTasks from '../../tasks.reducer';
import { TasksActions } from '../../tasks.actions';
import { GoogleTasksService } from '../../services/google-tasks.service';

class MockTasksActions extends TasksActions {
  loadLists(): void {  }
  addNewList(title: string): void {  }
  selectList(id: string): void {  }
  removeList(id: number): void {  }
  addNewListItem(listId: string, title: string): void {  }
  changeListItemStatus(id: string, listId: string, status: string): void {  }
}

describe('ListItemsSectionComponent', () => {
  let component: ListItemsSectionComponent;
  let fixture: ComponentFixture<ListItemsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsSectionComponent, ListItemActionsComponent, ListItemsComponent ],
      imports: [TasksMaterialModule,
        StoreModule.forRoot({
          tasks: fromTasks.reducer
        })
      ],
      providers: [
        { provide: TasksActions, useClass: MockTasksActions },
        GoogleTasksService
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
});
