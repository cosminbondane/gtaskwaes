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
          name: element.title
        });
      });
    }

    return taskLists;
  }

  loadTasks(id: string) {
    return new Promise((resolve) => {
      gapi.client.tasks.tasks.list({tasklist: id}).then(response => {
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
          text: element.title,
          position: 0,
          listId: 1,
          isDone: element.status === 'completed'
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
}
