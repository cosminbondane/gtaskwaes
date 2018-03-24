import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TasksPageComponent } from './containers/tasks-page/tasks-page.component';
import { ListItemsSectionComponent } from './containers/list-items-section/list-items-section.component';
import { ListsSectionComponent } from './containers/lists-section/lists-section.component';
import { ListsActionsComponent } from './components/lists-actions/lists-actions.component';
import { ListsComponent } from './components/lists/lists.component';
import { TasksActions } from './tasks.actions';
import { NewListPopupComponent } from './components/new-list-popup/new-list-popup.component';
import { ListItemActionsComponent } from './components/list-item-actions/list-item-actions.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { NewListItemPopupComponent } from './components/new-list-item-popup/new-list-item-popup.component';
import { GoogleTasksService } from './services/google-tasks.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule
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
    TasksActions,
    GoogleTasksService
  ]
})
export class TasksModule { }
