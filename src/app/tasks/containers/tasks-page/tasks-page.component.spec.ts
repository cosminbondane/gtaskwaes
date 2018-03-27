import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPageComponent } from './tasks-page.component';
import { ListItemsSectionComponent } from '../list-items-section/list-items-section.component';
import { ListsSectionComponent } from '../lists-section/lists-section.component';
import { TasksMaterialModule } from '../../tasks.material.module';
import { StoreModule } from '@ngrx/store';
import { TasksActionsService } from '../../tasks.actions';
import * as fromTasks from '../../tasks.reducer';
import { GoogleTasksService } from '../../services/google-tasks.service';
import { ListsActionsComponent } from '../../components/lists-actions/lists-actions.component';
import { NewListPopupComponent } from '../../components/new-list-popup/new-list-popup.component';
import { ListsComponent } from '../../components/lists/lists.component';
import { ListItemActionsComponent } from '../../components/list-item-actions/list-item-actions.component';
import { ListItemsComponent } from '../../components/list-items/list-items.component';
import { NewListItemPopupComponent } from '../../components/new-list-item-popup/new-list-item-popup.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TasksPageComponent', () => {
  let component: TasksPageComponent;
  let fixture: ComponentFixture<TasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TasksPageComponent,
        ListItemsSectionComponent,
        ListsSectionComponent,
        ListsActionsComponent,
        ListsComponent,
        NewListPopupComponent,
        ListItemActionsComponent,
        ListItemsComponent,
        NewListItemPopupComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        TasksMaterialModule,
        StoreModule.forRoot({
          tasks: fromTasks.reducer
        })
      ],
      providers: [TasksActionsService, GoogleTasksService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
