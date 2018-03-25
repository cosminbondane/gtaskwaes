import { Component, OnInit, Input } from '@angular/core';
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

  @Input() listId: string;

  listItems$: Observable<ListItemModel[]>;

  constructor(private store: Store<fromStore.State>,
    private tasksActions: TasksActions) {
    this.listItems$ = store.pipe(select(fromStore.getTasksSelectedListItems));
  }

  ngOnInit() {
  }

  onNewListItemAdded(title: string) {
    this.tasksActions.addNewListItem(this.listId, title);
  }

  onItemStatusChanged({id, status}) {
    this.tasksActions.changeListItemStatus(id, this.listId, status);
  }
}
