import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';

export enum TasksActionsTypes {
    ADD_LIST = '[TASKS] Add new list',
    REMOVE_LIST = '[TASKS] Remove new list',
    SELECT_LIST = '[TASKS] Select list',
    LOAD_LIST_ITEMS = '[TASKS] Load list items',
    ADD_LIST_ITEM = '[TASKS] Add list item',
    REMOVE_LIST_ITEM = '[TASKS] Remove list item'
}

@Injectable()
export class TasksActions {

    constructor(private store: Store<any>) { }

    addNewList(name: string) {
        this.store.dispatch({
            type: TasksActionsTypes.ADD_LIST,
            payload: name
        });
    }

    selectList(id: number) {
        this.store.dispatch({
            type: TasksActionsTypes.SELECT_LIST,
            payload: id
        });

        this.store.dispatch({
            type: TasksActionsTypes.LOAD_LIST_ITEMS,
            payload: id
        })
    }

    removeList(id: number) {
    }

    addNewListItem(text: string) {
        this.store.dispatch({
            type: TasksActionsTypes.ADD_LIST_ITEM,
            payload: text
        });
    }
}