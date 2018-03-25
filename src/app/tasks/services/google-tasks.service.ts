import { Injectable } from '@angular/core';
import { ListModel } from '../models/list.model';
import { ListItemModel } from '../models/list.item.model';

declare var gapi: any;

@Injectable()
export class GoogleTasksService {

  constructor() { }

  loadTasksLists() {
    return new Promise((resolve) => {
      gapi.client.tasks.tasklists.list({}).then(response => {
        resolve(this.transformGoogleTasksListsToListModel(response));
      }, err => {
        console.error(err);
        resolve([]);
      });
    });
  }

  transformGoogleTasksListsToListModel(response): ListModel[] {
    let taskLists: ListModel[] = [];
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

  loadTasks(id: string) {
    return new Promise((resolve) => {
      gapi.client.tasks.tasks.list({ tasklist: id }).then(response => {
        resolve(this.transformGoogleTasksToListItemModel(response));
      });
    });
  }

  transformGoogleTasksToListItemModel(response): ListItemModel[] {
    let tasks: ListItemModel[] = [];
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

  insertNewList(title: string) {
    return new Promise((resolve) => {
      gapi.client.tasks.tasklists.insert({ title }).then(response => {
        resolve(response.result.id);
      }, err => {
        resolve(null);
      });
    });
  }

  insertNewListItem(listId: string, title: string) {
    return new Promise((resolve) => {
      gapi.client.tasks.tasks.insert({ tasklist: listId, title }).then(response => {
        resolve(response.result);
      }, err => {
        resolve(null);
      });
    });
  }

  changeListItemStatus(id: string, listId: string, status: string) {
    return new Promise((resolve, reject) => {
      let request: any = { tasklist: listId, task: id, status };
      if (status !== 'completed') {
        request.completed = null;
      }
      gapi.client.tasks.tasks.patch(request).then(response => {
        resolve();
      }, err => {
        console.error(err);
        reject();
      })
    });
  }
}