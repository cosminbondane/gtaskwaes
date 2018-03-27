import { Injectable } from '@angular/core';
import { ListModel } from '../models/list.model';
import { ListItemModel } from '../models/list.item.model';
import { Observable } from 'rxjs/Observable';

declare var gapi: any;

@Injectable()
export class GoogleTasksService {

  constructor() { }

  loadTasksLists(): Observable<ListModel[]> {
    return new Observable(observer => {
      gapi.client.tasks.tasklists.list({}).then(response => {
        observer.next(this.transformGoogleTasksListsToListModel(response));
        observer.complete();
      }, err => {
        observer.error('Cannot fetch Tasks lists');
        observer.complete();
      });
    });
  }

  private transformGoogleTasksListsToListModel(response): ListModel[] {
    const taskLists: ListModel[] = [];
    if (response.result && response.result.items) {
      response.result.items.forEach(element => {
        taskLists.push({
          id: element.id,
          title: element.title
        });
      });
    }

    return taskLists;
  }

  loadTasks(id: string): Observable<ListItemModel[]> {
    return new Observable(observer => {
      gapi.client.tasks.tasks.list({ tasklist: id }).then(response => {
        observer.next((this.transformGoogleTasksToListItemModel(response)));
        observer.complete();
      }, err => {
        observer.error('Cannot fetch Tasks');
        observer.complete();
      });
    });
  }

  private transformGoogleTasksToListItemModel(response): ListItemModel[] {
    const tasks: ListItemModel[] = [];
    if (response.result && response.result.items) {
      response.result.items.forEach(element => {
        tasks.push({
          id: element.id,
          title: element.title,
          position: element.position,
          status: element.status
        });
      });
    }

    return tasks;
  }

  insertNewList(title: string): Observable<string> {
    return new Observable(observer => {
      gapi.client.tasks.tasklists.insert({ title }).then(response => {
        observer.next(response.result.id);
        observer.complete();
      }, err => {
        observer.error('Cannot add new list');
        observer.complete();
      });
    });
  }

  insertNewListItem(listId: string, title: string): Observable<ListItemModel> {
    return new Observable(observer => {
      gapi.client.tasks.tasks.insert({ tasklist: listId, title }).then(response => {
        observer.next(response.result);
        observer.complete();
      }, err => {
        observer.error('Cannot insert new task');
        observer.complete();
      });
    });
  }

  changeListItemStatus(id: string, listId: string, status: string): Observable<any> {
    return new Observable(observer => {
      const request: any = { tasklist: listId, task: id, status };
      if (status !== 'completed') {
        request.completed = null;
      }

      gapi.client.tasks.tasks.patch(request).then(response => {
        observer.next();
        observer.complete();
      }, err => {
        console.error(err);
        observer.error('Cannot update task');
        observer.complete();
      });
    });
  }

  removeListItem(id: string, listId: string) {
    return new Observable(observer => {
      gapi.client.tasks.tasks.delete({ tasklist: listId, task: id, status }).then(response => {
        observer.next();
        observer.complete();
      }, err => {
        observer.error('Cannot delete task');
        observer.complete();
      })
    })
  }
}