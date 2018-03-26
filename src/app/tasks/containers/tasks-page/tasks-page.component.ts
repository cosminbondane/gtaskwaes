import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../app.store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  loading$: Observable<boolean>;
  listId$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {
    this.loading$ = this.store.pipe(select(fromStore.getTasksLoading));
    this.listId$ = this.store.pipe(select(fromStore.getTasksSelectedListId));
  }

  ngOnInit() {
  }

}
