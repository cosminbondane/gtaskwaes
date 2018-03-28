import { reducer, initialState } from './tasks.reducer';
import { TasksActionsTypes } from './tasks.actions';
import { ListModel } from './models/list.model';
import { ListItemModel } from './models/list.item.model';

describe('TasksReducer', () => {

    describe('unknown action', () => {
        it('should not alterate the initial state', () => {
            const result = reducer(initialState, { type: 'UNKOWN' });
            expect(result).toEqual(initialState);
        });
    });

    describe('LOAD_LISTS', () => {
        it('should set loading to true', () => {
            const newState = { ...initialState, loading: true };
            const result = reducer(initialState, { type: TasksActionsTypes.LOAD_LISTS });
            expect(result).toEqual(newState);
        });
    });

    describe('LOAD_LISTS_END', () => {
        it('should set the lists', () => {
            const lists = [new ListModel(), new ListModel()];
            const newState = { ...initialState, loading: false, lists };
            const result = reducer(initialState, { type: TasksActionsTypes.LOAD_LISTS_END, payload: lists });
            expect(result).toEqual(newState);
        });
    });

    describe('ADD_LIST', () => {
        it('should set loading to true', () => {
            const newState = { ...initialState, loading: true };
            const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST });
            expect(result).toEqual(newState);
        });
    });

    describe('ADD_LIST_END', () => {
        it('should add new item to lists', () => {
            const newList = new ListModel();
            const newState = { ...initialState, loading: false, lists: [newList] };
            const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST_END, payload: newList });
            expect(result).toEqual(newState);
        });
    });

    describe('ADD_LIST_ITEM', () => {
        it('should set loading to true', () => {
            const newState = { ...initialState, loading: true };
            const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST_ITEM });
            expect(result).toEqual(newState);
        });
    });

    describe('ADD_LIST_ITEM_END', () => {
        it('should add new list item', () => {
            const listItem = new ListItemModel();
            const newState = { ...initialState, loading: false, listItems: [...initialState.listItems, listItem] };
            const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST_ITEM_END, payload: listItem });
            expect(result).toEqual(newState);
        });
    });

    describe('CHANGE_LIST_ITEM_STATUS', () => {
        it('should set loading to true', () => {
            const newState = { ...initialState, loading: true };
            const result = reducer(initialState, { type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS });
            expect(result).toEqual(newState);
        });
    });

    describe('CHANGE_LIST_ITEM_STATUS_END', () => {
        it('should update list item status', () => {
            const listItem = new ListItemModel();
            listItem.id = '1123R';
            listItem.status = 'needsAction';
            const currentState = { ...initialState, listItems: [listItem] };

            listItem.status = 'completed';
            const newState = { ...currentState, listItems: [listItem] };

            const result = reducer(currentState, { type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS_END, payload: listItem });
            expect(result).toEqual(newState);
        });
    });

    describe('SELECT_LIST', () => {
        it('should update the selected list', () => {
            const listId = '321DSAd231';
            const newState = { ...initialState, loading: true, selectedListId: listId };
            const result = reducer(initialState, { type: TasksActionsTypes.SELECT_LIST, payload: listId });
            expect(result).toEqual(newState);
        });
    });

    describe('LOAD_LIST_ITEMS', () => {
        it('should update list items', () => {
            const listItems = [new ListItemModel(), new ListItemModel()];
            const newState = { ...initialState, loading: false, listItems: [...listItems] };
            const result = reducer(initialState, { type: TasksActionsTypes.LOAD_LIST_ITEMS, payload: listItems });
            expect(result).toEqual(newState);
        });
    });

    describe('REMOVE_LIST_ITEM', () => {
        it('should set loading to true', () => {
            const newState = { ...initialState, loading: true };
            const result = reducer(initialState, { type: TasksActionsTypes.REMOVE_LIST_ITEM });
            expect(result).toEqual(newState);
        });
    });

    describe('REMOVE_LIST_ITEM_END', () => {
        it('should remove it from list items', () => {
            const listItem = new ListItemModel();
            listItem.id = '1123R';
            listItem.status = 'needsAction';

            const currentState = { ...initialState, listItems: [listItem] };
            const newState = { ...initialState, listItems: [] };
            const result = reducer(currentState, { type: TasksActionsTypes.REMOVE_LIST_ITEM_END, payload: '1123R' });
            expect(result).toEqual(newState);
        });
    });
});
