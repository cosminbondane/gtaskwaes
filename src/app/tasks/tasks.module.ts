import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { TasksPageComponent } from './containers/tasks-page/tasks-page.component';
import { ListItemsSectionComponent } from './containers/list-items-section/list-items-section.component';
import { ListsSectionComponent } from './containers/lists-section/lists-section.component';
import { ListsActionsComponent } from './presentational/lists-actions/lists-actions.component';
import { ListsComponent } from './presentational/lists/lists.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [TasksPageComponent, ListItemsSectionComponent, ListsSectionComponent, ListsActionsComponent, ListsComponent],
  exports: [TasksPageComponent]
})
export class TasksModule { }
