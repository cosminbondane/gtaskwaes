import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksPageComponent } from './containers/tasks-page/tasks-page.component';
import { ListItemsSectionComponent } from './containers/list-items-section/list-items-section.component';
import { ListsSectionComponent } from './containers/lists-section/lists-section.component';
import { ListsActionsComponent } from './components/lists-actions/lists-actions.component';
import { ListsComponent } from './components/lists/lists.component';
import { TasksActionsService } from './tasks.actions';
import { NewListPopupComponent } from './components/new-list-popup/new-list-popup.component';
import { ListItemActionsComponent } from './components/list-item-actions/list-item-actions.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { NewListItemPopupComponent } from './components/new-list-item-popup/new-list-item-popup.component';
import { GoogleTasksService } from './services/google-tasks.service';

import { TasksMaterialModule } from './tasks.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TasksMaterialModule
  ],
  declarations: [
    TasksPageComponent,
    ListItemsSectionComponent,
    ListsSectionComponent,
    ListsActionsComponent,
    ListsComponent,
    NewListPopupComponent,
    ListItemActionsComponent,
    ListItemsComponent,
    NewListItemPopupComponent
  ],
  entryComponents: [
    NewListPopupComponent,
    NewListItemPopupComponent
  ],
  exports: [TasksPageComponent],
  providers: [
    TasksActionsService,
    GoogleTasksService
  ]
})
export class TasksModule { }
