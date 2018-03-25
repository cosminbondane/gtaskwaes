import { reducer, initialState } from './tasks.reducer';
import { TasksActionsTypes } from './tasks.actions';
import { ListModel } from './models/list.model';
import { ListItemModel } from './models/list.item.model';

describe('TasksReducer', () => {
    it('should return default state if unknown action', () => {
        const result = reducer(initialState, { type: 'UNKOWN' });
        expect(result).toEqual(initialState);
    });

    it('should set loading to true if LOAD_LISTS action', () => {
        const newState = { ...initialState, loading: true };
        const result = reducer(initialState, { type: TasksActionsTypes.LOAD_LISTS });
        expect(result).toEqual(newState);
    });

    it('should set loading to true if ADD_LIST action', () => {
        const newState = { ...initialState, loading: true };
        const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST });
        expect(result).toEqual(newState);
    });

    it('should set loading to true if ADD_LIST_ITEM action', () => {
        const newState = { ...initialState, loading: true };
        const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST_ITEM });
        expect(result).toEqual(newState);
    });

    it('should set loading to true if CHANGE_LIST_ITEM_STATUS action', () => {
        const newState = { ...initialState, loading: true };
        const result = reducer(initialState, { type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS });
        expect(result).toEqual(newState);
    });

    it('should add new item to userLists if ADD_LIST_END action', () => {
        const newList = new ListModel();
        const newState = { ...initialState, loading: false, userLists: [newList] };
        const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST_END, payload: newList });
        expect(result).toEqual(newState);
    });

    it('should update the selected list if SELECT_LIST action', () => {
        const listId = '321DSAd231';
        const newState = { ...initialState, loading: true, selectedListId: listId };
        const result = reducer(initialState, { type: TasksActionsTypes.SELECT_LIST, payload: listId });
        expect(result).toEqual(newState);
    });

    it('should update the selected list items if LOAD_LIST_ITEMS action', () => {
        const listItems = [new ListItemModel(), new ListItemModel()];
        const newState = { ...initialState, loading: false, selectedListItems: [...listItems] };
        const result = reducer(initialState, { type: TasksActionsTypes.LOAD_LIST_ITEMS, payload: listItems });
        expect(result).toEqual(newState);
    });

    it('should add new list item if ADD_LIST_ITEM_END action', () => {
        const listItem = new ListItemModel();
        const newState = { ...initialState, loading: false, selectedListItems: [...initialState.selectedListItems, listItem] }
        const result = reducer(initialState, { type: TasksActionsTypes.ADD_LIST_ITEM_END, payload: listItem });
        expect(result).toEqual(newState);
    });

    it('should update list item status if CHANGE_LIST_ITEM_STATUS_END action', () => {
        const listItem = new ListItemModel();
        listItem.id = '1123R';
        listItem.status = 'needsAction';
        const currentState = { ...initialState, selectedListItems: [listItem] };
        const newState = { ...currentState, selectedListItems: [{id: '1123R', status: 'completed'}] };
        const result = reducer(currentState, { type: TasksActionsTypes.CHANGE_LIST_ITEM_STATUS_END, payload: { id: '1123R', status: 'completed' } });
        expect(result).toEqual(newState);
    });
});