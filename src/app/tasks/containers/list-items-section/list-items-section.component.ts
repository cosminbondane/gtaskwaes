import { Component, OnInit } from '@angular/core';
import { TasksActions } from '../../tasks.actions';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../app.store';
import { Observable } from 'rxjs/Observable';
import { ListItemModel } from '../../models/list.item.model';

@Component({
  selector: 'app-list-items-section',
  templateUrl: './list-items-section.component.html',
  styleUrls: ['./list-items-section.component.css']
})
export class ListItemsSectionComponent implements OnInit {

  listItems$: Observable<ListItemModel[]>;
  listId$: Observable<number>;

  constructor(private store: Store<fromStore.State>,
    private tasksActions: TasksActions) { 
      this.listItems$ = store.pipe(select(fromStore.getTasksSelectedListItems));
      this.listId$ = store.pipe(select(fromStore.getTasksSelectedListId));
    }

  ngOnInit() {
  }

  onNewListItemAdded(text: string) {
    this.tasksActions.addNewListItem(text);
  }
}
