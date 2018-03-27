// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ListsSectionComponent } from './lists-section.component';
// import { TasksMaterialModule } from '../../tasks.material.module';
// import { StoreModule } from '@ngrx/store';
// import { TasksActionsService } from '../../tasks.actions';
// import { GoogleTasksService } from '../../services/google-tasks.service';
// import * as fromTasks from '../../tasks.reducer';
// import { ListsActionsComponent } from '../../components/lists-actions/lists-actions.component';
// import { ListsComponent } from '../../components/lists/lists.component';

// import '../../../../test/global-variables';

// class MockTasksActions extends TasksActionsService {
//   loadLists(): void { }
//   addNewList(title: string): void { }
//   selectList(id: string): void { }
//   removeList(id: number): void { }
//   addNewListItem(listId: string, title: string): void { }
//   changeListItemStatus(id: string, listId: string, status: string): void { }
// }

// class MockGoogleTasksService extends GoogleTasksService {
//   loadTasksLists(): Promise<{}> {
//     return new Promise(resolve => resolve());
//   }
// }

// describe('ListsSectionComponent', () => {
//   let component: ListsSectionComponent;
//   let fixture: ComponentFixture<ListsSectionComponent>;
//   let tasksActions: TasksActionsService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ListsSectionComponent, ListsActionsComponent, ListsComponent],
//       imports: [TasksMaterialModule,
//         StoreModule.forRoot({
//           tasks: fromTasks.reducer
//         })
//       ],
//       providers: [
//         { provide: TasksActionsService, useClass: MockTasksActions },
//         { provide: GoogleTasksService, useClass: MockGoogleTasksService }
//       ]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     tasksActions = TestBed.get(TasksActionsService);
//     fixture = TestBed.createComponent(ListsSectionComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     spyOn(tasksActions, 'loadLists');
//     expect(component).toBeTruthy();
//     expect(tasksActions.loadLists).toHaveBeenCalled;
//   });
// });
