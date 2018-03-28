import { ListsSectionComponent } from './lists-section.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ListsActionsComponent } from '../../components/lists-actions/lists-actions.component';
import { ListsComponent } from '../../components/lists/lists.component';
import { TasksMaterialModule } from '../../tasks.material.module';
import { GoogleTasksService } from '../../services/google-tasks.service';
import { TasksActionsService, TasksActionsTypes } from '../../tasks.actions';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromTasks from '../../tasks.reducer';

describe('ListsSectionComponent', () => {
  let component: ListsSectionComponent;
  let fixture: ComponentFixture<ListsSectionComponent>;

  let storeSpy;
  let tasksActionsServiceSpy;

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('Store', [
      'pipe'
    ]);

    tasksActionsServiceSpy = jasmine.createSpyObj('TasksActionsService', [
      'loadLists', 'selectList', 'addNewList'
    ]);
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListsSectionComponent,
        ListsActionsComponent,
        ListsComponent
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
    fixture = TestBed.createComponent(ListsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load lists on ngOnInit', () => {
    expect(tasksActionsServiceSpy.loadLists).toHaveBeenCalled;
  });

  it('should select list', () => {
    component.onListSelected('113');
    expect(tasksActionsServiceSpy.selectList).toHaveBeenCalledWith('113');
  });

  it('should add new list', () => {
    component.onNewListAdded('my-new-list');
    expect(tasksActionsServiceSpy.addNewList).toHaveBeenCalledWith('my-new-list');
  });
});