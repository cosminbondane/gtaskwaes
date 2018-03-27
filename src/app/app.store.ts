import * as fromTasks from './tasks/tasks.reducer';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface State {
    tasks: fromTasks.State;
}

export const reducers: ActionReducerMap<State> = {
    tasks: fromTasks.reducer
};

// Selectors
export const getTasksState = (state: State) => state.tasks;
export const getTasksUserLists = createSelector(getTasksState, fromTasks.getLists);
export const getTasksSelectedListId = createSelector(getTasksState, fromTasks.getSelectedListId);
export const getTasksSelectedListItems = createSelector(getTasksState, fromTasks.getListItems);
export const getTasksLoading = createSelector(getTasksState, fromTasks.getLoading);
