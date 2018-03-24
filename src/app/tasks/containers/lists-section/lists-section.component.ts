import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../app.store';
import { Observable } from 'rxjs/Observable';
import { ListModel } from '../../models/list.model';
import { TasksActions } from '../../tasks.actions';

@Component({
  selector: 'app-lists-section',
  templateUrl: './lists-section.component.html',
  styleUrls: ['./lists-section.component.css']
})
export class ListsSectionComponent implements OnInit {

  userLists$: Observable<ListModel[]>;
  selectedListId$: Observable<number>;

  constructor(private store: Store<fromStore.State>,
    private tasksActions: TasksActions) { 
    this.userLists$ = store.pipe(select(fromStore.getTasksUserLists));
    this.selectedListId$ = store.pipe(select(fromStore.getTasksSelectedListId));
  }

  ngOnInit() {
    this.tasksActions.loadLists();
  }

  onListSelected(id: string) {
    this.tasksActions.selectList(id);
  }

  onNewListAdded(name: string) {
    this.tasksActions.addNewList(name);
  }
}
