import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { ListItemModel } from "./models/list.item.model";
import { ListModel } from "./models/list.model";
import { GoogleTasksService } from "./services/google-tasks.service";

export enum TasksActionsTypes {
    LOAD_LISTS = '[TASKS] Load lists',
    LOAD_LISTS_END = '[TASKS] Load lists completed',
    ADD_LIST = '[TASKS] Add new list',
    ADD_LIST_END = '[TASKS] Add new list completed',
    REMOVE_LIST = '[TASKS] Remove new list',
    SELECT_LIST = '[TASKS] Select list',

    LOAD_LIST_ITEMS = '[TASKS] Load list items',
    ADD_LIST_ITEM = '[TASKS] Add list item',
    ADD_LIST_ITEM_END = '[TASKS] Add list item completed',
    CHANGE_LIST_ITEM_STATUS = '[TASKS] Change list item status',
    CHANGE_LIST_ITEM_STATUS_END = '[TASKS] Change list item status completed',

    REMOVE_LIST_ITEM = '[TASKS] Remove list item'
}

@Injectable()
export class TasksActions {

    constructor(private store: Store<any>,
        private googleTasksService: GoogleTasksService) { }

    loadLists() {
        this.store.dispatch({ type: TasksActionsTypes.LOAD_LISTS });
        this.googleTasksService.loadTasksLists().then(tasksLists => {
            this.store.dispatch({ 
                type: TasksActionsTypes.LOAD_LISTS_END, 
                payload: tasksLists 
            });
        });
    }

    addNewList(title: string) {
        this.store.dispatch({ type: TasksActionsTypes.ADD_LIST });
        this.googleTasksService.insertNewList(name).then((listId: string) => {
            this.store.dispatch({
                type: TasksActionsTypes.ADD_LIST_END,
                payload: {
                    id: listId,
                    title
                }
            });
        });
    }

    selectList(id: string) {
        this.store.dispatch({ type: TasksActionsTypes.SELECT_LIST, payload: id });
        this.googleTasksService.loadTasks(id).then(tasks => {
            this.store.dispatch({
                type: TasksActionsTypes.LOAD_LIST_ITEMS,
                payload: tasks
            });
        });
    }

    removeList(id: number) {
    }

    addNewListItem(listId: string, title: string) {
        this.store.dispatch({ type: TasksActionsTypes.ADD_LIST_ITEM });
        this.googleTasksService.insertNewListItem(listId, title).then((listItem: ListItemModel) => {
            this.store.dispatch({
                type: TasksActionsTypes.ADD_LIST_ITEM_END,
                payload: listItem
            });
        });
    }

    changeListItemStatus(id: string, listId: string, status: string) {
        this.store.dispatch({ type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS });
        this.googleTasksService.changeListItemStatus(id, listId, status).then(() => {
            this.store.dispatch({
                type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS_END,
                payload: {
                    id,
                    status
                }
            });
        });
    }
}