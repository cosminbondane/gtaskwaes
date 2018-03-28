import { TestBed, inject } from '@angular/core/testing';

import { TasksActionsService, TasksActionsTypes } from './tasks.actions';
import { Store } from '@ngrx/store';
import { GoogleTasksService } from './services/google-tasks.service';
import { Observable } from 'rxjs/Observable';
import { ListModel } from './models/list.model';

import 'rxjs/add/observable/of';

describe('TasksActions', () => {

  let service;
  let storeSpy;
  let googleTasksServiceSpy;

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
    googleTasksServiceSpy = jasmine.createSpyObj('GoogleTasksService', [
      'loadTasksLists', 'insertNewList', 'loadTasks', 'insertNewListItem', 'changeListItemStatus', 'removeListItem'
    ]);

    service = new TasksActionsService(storeSpy, googleTasksServiceSpy);
  });

  describe('loadLists', () => {
    it('should dispatch LOAD_LISTS, call google service and dispatch LOAD_LIST_END', () => {
      googleTasksServiceSpy.loadTasksLists.and.returnValue(Observable.of([]));

      service.loadLists();

      expect(googleTasksServiceSpy.loadTasksLists).toHaveBeenCalled;
      expect(storeSpy.dispatch).toHaveBeenCalledTimes(2);
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.LOAD_LISTS });
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.LOAD_LISTS_END, payload: [] });
    });
  });

  describe('insertNewList', () => {
    it('should dispatch ADD_LIST, call google service and dispatch ADD_LIST_END', () => {
      const id = '123R';
      const title = 'Hello';

      googleTasksServiceSpy.insertNewList.and.returnValue(Observable.of(id));

      service.addNewList(title);

      expect(googleTasksServiceSpy.insertNewList).toHaveBeenCalled;
      expect(storeSpy.dispatch).toHaveBeenCalledTimes(2);
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.ADD_LIST });
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.ADD_LIST_END, payload: { id, title } });
    });
  });

  describe('selectList', () => {
    it('should dispatch SELECT_LIST, call google service and dispatch LOAD_LIST_ITEMS', () => {
      const id = '123R';

      googleTasksServiceSpy.loadTasks.and.returnValue(Observable.of([]));

      service.selectList(id);

      expect(googleTasksServiceSpy.loadTasks).toHaveBeenCalled;
      expect(storeSpy.dispatch).toHaveBeenCalledTimes(2);
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.SELECT_LIST, payload: id });
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.LOAD_LIST_ITEMS, payload: [] });
    });
  });

  describe('addNewListItem', () => {
    it('should dispatch ADD_LIST_ITEM, call google service and dispatch ADD_LIST_ITEM_END', () => {
      const listId = '123R';
      const title = 'Hello';

      googleTasksServiceSpy.insertNewListItem.and.returnValue(Observable.of({ listId, title }));

      service.addNewListItem(listId, title);

      expect(googleTasksServiceSpy.insertNewListItem).toHaveBeenCalled;
      expect(storeSpy.dispatch).toHaveBeenCalledTimes(2);
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.ADD_LIST_ITEM });
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.ADD_LIST_ITEM_END, payload: { listId, title } });
    });
  });

  describe('changeListItemStatus', () => {
    it('should dispatch CHANGE_LIST_ITEM_STATUS, call google service and dispatch CHANGE_LIST_ITEM_STATUS_END', () => {
      const listId = '123R';
      const id = 'I677';
      const status = 'completed';

      googleTasksServiceSpy.changeListItemStatus.and.returnValue(Observable.of({}));

      service.changeListItemStatus(id, listId, status);

      expect(googleTasksServiceSpy.changeListItemStatus).toHaveBeenCalled;
      expect(storeSpy.dispatch).toHaveBeenCalledTimes(2);
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS });
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS_END, payload: { id, status } });
    });
  });

  describe('removeListItem', () => {
    it('should dispatch REMOVE_LIST_ITEM, call google service and dispatch REMOVE_LIST_ITEM_END', () => {
      const listId = '123R';
      const id = 'I677';

      googleTasksServiceSpy.removeListItem.and.returnValue(Observable.of({}));

      service.removeListItem(id, listId);

      expect(googleTasksServiceSpy.removeListItem).toHaveBeenCalled;
      expect(storeSpy.dispatch).toHaveBeenCalledTimes(2);
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.REMOVE_LIST_ITEM });
      expect(storeSpy.dispatch).toHaveBeenCalledWith({ type: TasksActionsTypes.REMOVE_LIST_ITEM_END, payload: id });
    });
  });
});
